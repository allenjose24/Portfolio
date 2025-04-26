const { BetaAnalyticsDataClient } = require('@google-analytics/data');

exports.handler = async (event, context) => {
    try {
        const analyticsDataClient = new BetaAnalyticsDataClient({
            credentials: JSON.parse(process.env.GA_CREDENTIALS),
        });

        const [response] = await analyticsDataClient.runReport({
            property: `properties/${process.env.GA_PROPERTY_ID}`,
            dateRanges: [
                {
                    startDate: '2025-04-01', // Adjust to when you started GA4 tracking
                    endDate: 'today',
                },
            ],
            metrics: [
                {
                    name: 'screenPageViews',
                },
            ],
        });

        const totalPageViews = response.rows[0].metricValues[0].value;

        return {
            statusCode: 200,
            body: JSON.stringify({ totalPageViews }),
        };
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to fetch visitor data' }),
        };
    }
};