const headers = {
  Authorization: `Bearer ${process.env.UPSTASH_REDIS_REST_TOKEN}`,
};

const webhooks = {
  APP_UNINSTALLED: {
    path: '/api/webhooks',
    webhookHandler: async (topic, shop, body) => {
      console.log('App uninstalled');

      async function deleteKeys() {
        const keysResponse = await fetch(
          `${process.env.upstashRedisRestUrl}/keys/*`,
          {
            headers,
          }
        );
        const keys = await keysResponse.json();

        for (const key of keys.result) {
          const valueResponse = await fetch(
            `${process.env.upstashRedisRestUrl}/get/${key}`,
            { method: 'GET', headers }
          );
          const value = await valueResponse.text();
          console.log('Value: ', value);
          if (value.includes(shop)) {
            console.log(`Deleting key: ${key}`);

            await fetch(`${process.env.upstashRedisRestUrl}/del/${key}`, {
              method: 'GET',
              headers,
            });
          }
        }
      }

      deleteKeys();
    },
  },
};

export default webhooks;
