/* eslint-disable */

export default {
    id: 12184,
    username: 'gonzalo.bahamondez@simplit-solutions.com',
    name: 'Gonzalo Bahamondez',
    phone: '0964145462',
    email: 'gonzalo.bahamondez@simplit-solutions.com',
    is_owner: true,
    is_admin: true,
    is_driver: true,
    is_monitor: false,
    is_staff: true,
    old_id: null,
    created: '2018-05-07T18:19:14.362532Z',
    modified: '2019-06-07T04:22:38.651574Z',
    last_login: '2019-06-07T04:22:38.651462Z',
    account: {
        id: 6191,
        old_id: null,
        country: 'CL',
        status: 'trialing',
        name: 'SimpliRoute',
        active_until: '2022-05-21T18:19:14Z',
        plan_quantity: 10,
        card_last4: '',
        card_brand: null,
        funding: null,
        exp_month: null,
        exp_year: null,
        coupon: null,
        optimization_options: {
            balance: false,
            all_vehicles: true,
            open_ended: false,
            big_cluster: false,
            join: false,
            big_cluster_optimize: false,
            last_position_optimize: false,
            displayed_options: [
                'balance',
                'all_vehicles',
                'open_ended'
            ],
            fmv: '2.0',
            single_tour: false,
            beauty: false
        },
        configs: [
            {
                value: false,
                key: 'enable_observations'
            },
            {
                value: true,
                key: 'send_gps'
            },
            {
                value: false,
                key: 'live_tracking'
            },
            {
                value: 150,
                key: 'max_distance'
            },
            {
                value: 0,
                key: 'vehicle_refill_time'
            },
            {
                value: false,
                key: 'checkout_similars'
            },
            {
                value: true,
                key: 'enable_jdh'
            },
            {
                value: true,
                key: 'enable_signature'
            },
            {
                value: false,
                key: 'on_its_way_enabled'
            }
        ],
        timezone: 'America/Santiago',
        vehicle_quantity: '6 - 10',
        module_interest: 'optimizer',
        utm: ''
    },
    has_suscription_id: false,
    url: 'http://api.simpliroute.com/v1/',
    gps_config: {
        desiredOdometerAccuracy: 100,
        distanceFilter: 10,
        geofenceProximityRadius: 1000,
        locationUpdateInterval: 1000,
        stopTimeout: 5,
        stopDetectionDelay: 1000,
        forceReloadOnLocationChange: false,
        method: 'POST',
        fastestLocationUpdateInterval: 10000,
        deferTime: 0,
        activityRecognitionInterval: 10000,
        batchSync: false,
        forceReloadOnMotionChange: false,
        triggerActivities: 'in_vehicle, on_bicycle, running, walking, on_foot',
        foregroundService: true,
        elasticityMultiplier: 1000,
        url: 'https://api.simpliroute.com/v1/tracking/background-location/',
        desiredAccuracy: 0,
        autoSync: true,
        stopOnTerminate: false,
        debug: false,
        forceReloadOnGeofence: false,
        startOnBoot: false,
        stopAfterElapsedMinutes: 0
    }
};
