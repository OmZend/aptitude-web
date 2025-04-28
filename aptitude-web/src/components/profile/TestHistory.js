import React from 'react';

const TestHistory = ({ testHistory }) => {
  const calculatePerformance = (history) => {
    const totalTests = history.length;
    const totalScore = history.reduce((sum, test) => sum + test.score, 0);
    const averageScore = totalTests > 0 ? Math.round(totalScore / totalTests) : 0;
    const bestScore = Math.max(...history.map(test => test.score), 0);

    // Calculate category-wise performance
    const categoryPerformance = {};
    history.forEach(test => {
      test.categories.forEach(category => {
        if (!categoryPerformance[category]) {
          categoryPerformance[category] = { total: 0, count: 0 };
        }
        categoryPerformance[category].total += test.score;
        categoryPerformance[category].count += 1;
      });
    });

    // Calculate average for each category
    Object.keys(categoryPerformance).forEach(category => {
      categoryPerformance[category].average = Math.round(
        categoryPerformance[category].total / categoryPerformance[category].count
      );
    });

    return {
      totalTests,
      averageScore,
      bestScore,
      categoryPerformance
    };
  };

  const performance = calculatePerformance(testHistory);

  return (
    <div className="space-y-8">
      {/* Performance Overview */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold text-slate-800 mb-4">Performance Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-blue-600">Total Tests</p>
            <p className="text-2xl font-bold text-blue-800">{performance.totalTests}</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-sm text-green-600">Average Score</p>
            <p className="text-2xl font-bold text-green-800">{performance.averageScore}%</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <p className="text-sm text-purple-600">Best Score</p>
            <p className="text-2xl font-bold text-purple-800">{performance.bestScore}%</p>
          </div>
        </div>
      </div>

      {/* Category-wise Performance */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold text-slate-800 mb-4">Category-wise Performance</h3>
        <div className="space-y-4">
          {Object.entries(performance.categoryPerformance).map(([category, data]) => (
            <div key={category}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-slate-700">{category}</span>
                <span className="text-sm font-medium text-slate-700">{data.average}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${data.average}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Tests */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold text-slate-800 mb-4">Recent Tests</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Test Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Score
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Categories
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {testHistory.map((test, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(test.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {test.testType}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {test.score}%
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {test.categories.join(', ')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TestHistory; 