module.exports = ({ env }) => ({
    'users-permissions': {
        config: {
            jwtSecret: env('JWT_SECRET', 'bTknjD74vnTg42zI+VskHehfI1Y+L2pC19F3wzHjksF8sbjzQwH7ZP4GzD5lhj3Z5A'),
        },
    },
});
