import { graphql } from 'msw';
import { poaps, stats, leaderData, projectData, rawPOAPs } from './index';

export const GetAllStatsHandler = graphql.query('GetAllStats', (req, res, ctx) => {
  return res(
    ctx.data({
      allStats: {
        stats,
      },
    }),
  );
});

export const MostClaimedPoapsHandler = graphql.query('mostClaimedPoaps', (req, res, ctx) => {
  return res(
    ctx.data({
      mostClaimedPoaps: {
        poaps: [...Array(10).keys()].map(() => poaps[0]),
      },
    }),
  );
});

export const LeadersHandler = graphql.query('leaders', (req, res, ctx) => {
  return res(
    ctx.data({
      leaders: {
        users: leaderData,
      },
    }),
  );
});

export const RecentProjectsHandler = graphql.query('recentProjects', (req, res, ctx) => {
  return res(
    ctx.data({
      recentProjects: {
        projects: projectData,
      },
    }),
  );
});

export const AllPOAPsHandler = graphql.query('allPOAPs', (req, res, ctx) => {
  return res(
    ctx.data({
      allPOAPs: {
        poaps: rawPOAPs,
      },
    }),
  );
});
