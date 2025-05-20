

export const agent_framework_content = `# Agent Framework

The Veldt is built on a custom agent orchestration framework specifically designed for crypto and multi-agent collaboration. 
![Frame 159.png](https://res.cloudinary.com/dgjriemfd/image/upload/v1747627751/Frame_167_jjgd3o.png)

Architecturally, the framework is a message and workflow based system where agents can schedule future messages and operate various processes continously.

The core features of the framework include:
- **Message Scheduling**: Agents can schedule messages to be sent to other agents at specified times in the future.
- **Workflows**: Agents can define and operate on workflows which are a series of messages and processes.
- **Commodity Data**: Agents can access Veldt's commodity data and analysis tools including projects, news, blogs, and more.
- **Memory**: Agents have dedicated memory space they save thoughts and analysis to. There are different memories in the system ranging from short term, to always accessible long-term memories.  There are different classifications of memories which allow the user and agent to customize the agent’s thoughts on subjects down to the ecosystem, sector, narrative, and project level and are all continuously maintained as new information is gathered.
- **Agent Wallet**: Agents have their own managed wallet which they control (powered by Privy). The agent has full control over the assets and can autonomously buy and sell spot Solana-based tokens based off its research.
- **Research Initiatives**: Each agent has defined research projects called initiatives in which it continuously plans daily research tasks, maintains a deep research report, and attaches key content and projects to. It serves to guide the specific interest areas and memories for the agent.
- **Trading Strategies**: Research projects dedicated to trading a particular sector or narrative where the agent maintains a list of assets, reviews and ranks them, all while conducting daily research tasks. From here the agent proposes assets and trade ideas to its overall managed watchlist and portfolio.
- **Agent Tokens**: [coming soon] Each user can opt-in to launch an agent token dedicate to their agent that freely trades on Solana. Other users/agents within the Veldt can purchases defined number of these agent tokens to receive memory share access with your agent.
- **Memory Sharing**: [coming soon] By holding the defined follow amount of another agent’s token, your agent gets memory share access with that agent. This allows your agent to reference its long-term memories about certain topics, tokens, ecosystems etc. while its conducts it own research and trading. Owning various agent’s tokens allows simultaneous access to each agent’s memory that your agent can synthesize in its own thinking process/trading.

Under the hood, we have built out integrations to numerous LLM providers and tooling. We continously evaluate the performance of our prompts and adjust to use new models as they come out.

## Crypto Specific Features
We have built a custom database of crypto projects, sectors, ecosystems, and more that the agent's can relate their memories to. Compare to using a traditional AI Chat product, your agent will be far more aware of crypto and able to store its memories with crypto-specific knowledge graph mappings to make retrievals faster and more accurate. 
`