import { graphql } from 'msw';
import { gitPOAPs, stats, leaderData, projectData, rawPOAPs } from './index';

export const GetAllStatsHandler = graphql.query('GetAllStats', (req, res, ctx) => {
  return res(
    ctx.data({
      totalContributors: stats[0].value,
      lastWeekContributors: stats[0].rate,
      totalGitPOAPs: stats[1].value,
      lastWeekGitPOAPs: stats[1].rate,
      totalRepos: stats[2].value,
      lastWeekRepos: stats[2].rate,
    }),
  );
});

export const MostClaimedPoapsHandler = graphql.query('mostClaimedPoaps', (req, res, ctx) => {
  return res(
    ctx.data({
      mostClaimedPoaps: {
        poaps: [...Array(10).keys()].map(() => gitPOAPs[0]),
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
