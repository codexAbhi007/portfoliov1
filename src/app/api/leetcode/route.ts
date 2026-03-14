export async function GET() {
  const username = "codexAbhi007";

  const query = {
    query: `
      query userProfile($username: String!) {
        matchedUser(username: $username) {
          profile {
            ranking
          }
          submitStats {
            acSubmissionNum {
              difficulty
              count
            }
          }
        }
        allQuestionsCount {
          difficulty
          count
        }
      }
    `,
    variables: { username }
  };

  const res = await fetch("https://leetcode.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(query),
    next: { revalidate: 3600 }
  });

  const json = await res.json();

  const user = json.data.matchedUser;
  const stats = user.submitStats.acSubmissionNum;
  const totals = json.data.allQuestionsCount;

  const easy = stats.find((s: { difficulty: string, count: number }) => s.difficulty === "Easy")?.count ?? 0;
  const medium = stats.find((s: { difficulty: string, count: number }) => s.difficulty === "Medium")?.count ?? 0;
  const hard = stats.find((s: { difficulty: string, count: number }) => s.difficulty === "Hard")?.count ?? 0;
  const totalSolved = stats.find((s: { difficulty: string, count: number }) => s.difficulty === "All")?.count ?? 0;

  const totalEasy = totals.find((q: { difficulty: string, count: number }) => q.difficulty === "Easy")?.count ?? 0;
  const totalMedium = totals.find((q: { difficulty: string, count: number }) => q.difficulty === "Medium")?.count ?? 0;
  const totalHard = totals.find((q: { difficulty: string, count: number }) => q.difficulty === "Hard")?.count ?? 0;
  const totalQuestions = totals.find((q: { difficulty: string, count: number }) => q.difficulty === "All")?.count ?? 0;

  return Response.json({
    ranking: user.profile.ranking,
    easy,
    medium,
    hard,
    totalSolved,
    totalQuestions,
    totalEasy,
    totalMedium,
    totalHard
  });
}