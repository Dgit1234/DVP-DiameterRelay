module.exports = {


    "Security":
    {
        "ip": "SYS_REDIS_HOST",
        "port": "SYS_REDIS_PORT",
        "user": "SYS_REDIS_USER",
        "password": "SYS_REDIS_PASSWORD"

    },

    "Host":
    {
        "domain": "HOST_NAME",
        "ip": "HOST_IP",
        "port": "HOST_DIAMETERRELAY_PORT",
        "version": "HOST_VERSION"
    },

    "LBServer" : {

        "ip": "LB_FRONTEND",
        "port": "LB_PORT"

    },


    "Services" : {
        "diameterServerHost": "SYS_DIAMETERSERVER_HOST_IP",
        "diameterServerPort": "SYS_DIAMETERSERVER_PORT",
        "diameterServerVersion": "SYS_DIAMETERSERVER_VERSION"

    }
};
