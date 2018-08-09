import ApolloClient, { gql } from 'apollo-boost';

export const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    Authorization: 'bearer 08768333f6e9941dc986c81a7a92241e457779a3'
  }
});

export const getJobs = () => {
  client
    .query({
      query: gql`
        {
          repository(owner: "frontendbr", name: "vagas") {
            issues(last: 100, states: OPEN) {
              edges {
                node {
                  title
                  url
                  bodyText
                  publishedAt
                  labels(first: 100) {
                    edges {
                      node {
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `
    })
    .then(response => {
      const rawIssues = response.data.repository.issues.edges;
      const rawJobs = rawIssues.map(issue => issue.node);
      const jobs = rawJobs
        .map(job => {
          const city = job.title.substring(job.title.indexOf('[') + 1, job.title.indexOf(']'));
          const company = job.title.substring(
            job.title.lastIndexOf('[') + 1,
            job.title.lastIndexOf(']')
          );
          if (city === company) return null;
          return { city, company };
        })
        .filter(job => job);
      console.log(jobs);
      return jobs;
    })
    .catch(error => console.log(error));
};
