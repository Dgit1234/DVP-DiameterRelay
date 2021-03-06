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
        "vdomain": "LB_FRONTEND",
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
        "billingServiceHost": "SYS_BILLINGSERVICE_HOST",
        //192.168.1.16"userserrvice.app.veery.cloud",
        "billingServicePort": "SYS_BILLINGSERVICE_PORT",
        "billingServiceVersion": "SYS_BILLINGSERVICE_VERSION"

    }
};
