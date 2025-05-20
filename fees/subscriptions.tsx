

export const subscriptions_content = `# Veldt Subscription

A Veldt subscription is required to have an actively running agent. We continously execute your agent in the background even when you're not using the platofrm which of course incurs costs.

We offer two tiers of subscription which can be summarized as:
- **Casual** ($29/month): The Casual plan gets you an active agent complete with memory, a trading wallet, and unlimited basic model usage + 50 credits of higher-tier model usage. 
- **Pro** ($99/month): With the Pro plan, you get all the same features as the Casual plan but with more usage -- your agent can have more active research and trading projects and you get more credits of higher-tier models.

A **Free Tier** is also available which includes unlimited access to the Content Feed and includes a nominal 15 monthly credits for AI chat usage (no agent).

## Plan Comparison

### Free Tier ($0/month)
- Requires email or twitter login
- Unlimited access to the Content Feed
- 15 monthly credits for AI chat usage
- No active agent

### Casual ($29/month)
- All Free Tier features
- Active agent
- Full memory library and
- Limits active research and trading projects to 2 and 1 respectively
- Unlimited basic model usage + 50 higher-tier model credits
- 75bps trading fee on Agent Swaps

### Pro ($99/month)
- All Casual features such as active agent, full memory library, and unlimited basic model usage
- Additional Research and Trading projects: 5 active research projects and 3 active trading projects
- Optional Twitter Bookmarks and Likes integration (auto-ingest your bookmarks into your agent's memory)
- 35bps trading fee on Agent Swaps
- 250 higher-tier model credits

## Basic Models vs High-Tier Models
Different LLM models have different costs which loosely coorespond to the quality of the model. We allow you to choose the model for your chat experience and simply charge you for the usage.

With the paid plans, you get unlimited credits of the basic models such as Gemini Flash and GPT-4.1-mini. Higher-tier models such as Gemini Pro and Claude Sonnet have varying credit costs per chat message. For example, Claude Sonnet is the most expensive model that we offer at the moment and cost nearly 2x more than other higher-tier models like Gemini Pro.

As a quick reference, we find that the best usage of credits and model capabilities is as follows:
- Gemini Flash & GPT-4.1-mini: Best for general purpose chat such as getting more details and research on a topic.
- Gemini Pro & GPT-4.1: Best for when doing deeper comparitive research and relying on tool usage more.
- Claude Sonnet: Best for creative writing and tool usage (but is much more expensive). 

For tool usage, such as calling the research Tool, edit document tool, we find that the OpenAI models follow instructions ever so slightly better than the Google models.

## Credits
Credits are a unified way to track usage across all models. Each model has a different credit cost per message and on each chat message, we measure the exact amount of tokens used and convert them to a credit cost which hits your account. 

To simplify things, paid tiers get unlimited basic model credits and a certain number of higher-tier model credits. 

If you want more usage, Pro subscribers can enable Credit Overage (aka usage billing) where you have no ceiling on your usage and we will simply pass through the cost of additional credits at $0.30 per credit. Note, your first 250 credits are still included in your plan. Enabling Overage is likely needed if you want your agent using high-tier models inside of its research and trading projects.
![Frame 159.png](https://res.cloudinary.com/dgjriemfd/image/upload/v1747747227/overage_fzxnmj.png)

(We know having a new credits system can be confusing and isn't ideal but we need a common accounting system to track usage across all models that have quite varying costs.)

`
