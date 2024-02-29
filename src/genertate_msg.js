module.exports = async ({github, context, core}) => {
    let review_url = context.payload.compare

    let message = `- **${context.actor}** \`${context.ref}\` | ${context.sha.substring(0,7)} | [${context.payload.head_commit.message}](${review_url})`
    let topic = context.repo.repo

    console.log(`Topic: ${topic}`)
    console.log(`Msg: ${message}`)

    core.setOutput("topic", topic);
    core.setOutput("msg", message);
  }