module.exports = async ({github, context, core}) => {
    // Get commit sha    
    let commit_sha = context.sha

    // Look up pull request by commit sha
    const query = `query associatedPRs($sha: String, $repo: String!, $owner: String!){
      repository(name: $repo, owner: $owner) {
        commit: object(expression: $sha) {
          ... on Commit {
            associatedPullRequests(first:5){
              edges{
                node{
                  title
                  number
                  body
                }
              }
            }
          }
        }
      }
    }`;

    const variables = {
      owner: context.repo.owner,
      repo: context.repo.repo,
      sha: commit_sha
    }
    const result = await github.graphql(query, variables)

    let review_url = context.payload.compare

    const pullRequests = result.repository.commit.associatedPullRequests.edges
    if (pullRequests && pullRequests.length > 0) {

      let pullrequest_id = pullRequests[0].node.number

      // Retrieve pull request object & inspect approvers
      const pullrequest_result = await github.request('GET /repos/{owner}/{repo}/pulls/{pull_number}',{
        owner: context.repo.owner,
        repo: context.repo.repo,
        pull_number: pullrequest_id,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      })

      if (pullrequest_result) {
        review_url = pullrequest_result.data.html_url
      }
    }

    // - brian.lagoda feature-proxy-restarts-on-fatals | f77c8a53de09 Merge with default

    console.log(context)

    core.setOutput("topic", context.repo.repo);
    core.setOutput("msg", "The message from the JS script");
  }