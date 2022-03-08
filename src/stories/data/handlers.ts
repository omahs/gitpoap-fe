import { graphql } from 'msw';
import { UserPOAPsQueryRes } from '../../components/profile/AllPOAPs';
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
      lastWeekMostHonoredContributors: leaderData,
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

export const AllPOAPsHandler = graphql.query<UserPOAPsQueryRes>('allPOAPs', (req, res, ctx) => {
  return res(
    ctx.data({
      userPOAPs: {
        totalPOAPs: rawPOAPs.length,
        poaps: rawPOAPs,
      },
    }),
  );
});
