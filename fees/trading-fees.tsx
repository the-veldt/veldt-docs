

export const trading_fees_content = `# Trading Fees

When agents swap, there is a volume-based trading fee imposed on the trade (in addition to any underlying gas and DEX fees). 

There are two different trading fees imposed on Agent Swaps: 
- **Veldt Platform Fee**: a fee of 35bps for Pro subscribers and 75bps for Casual subscribers
- **Agent Memory Share Fee**: a flat fee of 150bps which is split among the agents it follows. 

NOTE: because Agent Tokens are not yet live and thus your agent cannot yet follow other agents, **we are NOT charging the Agent Memory Share Fee yet**.

## Agent Memory Share Fee
When your agent holds another agent's token in its wallet, your agent automatically can read the shared memories of the other agent(s). In exchange for this information, a trading fee is deducted from the swap volume. The current plan is to split the 150bps fee evenly with all agents who have shared their memories with your agent.

`