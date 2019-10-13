import {
    Account,
    OptimizationOptions,
    User,
} from '@simpliroute/core/entities';

export default (raw: any): User => {
    let optimizationOptions: OptimizationOptions;
    let account: Account;

    if (raw.account !== null && raw.account !== undefined) {
        optimizationOptions = {
            balance: raw.account.optimization_options.balance,
            allVehicles: raw.account.optimization_options.all_vehicles,
            openEnded: raw.account.optimization_options.open_ended,
            bigCluster: raw.account.optimization_options.big_cluster,
            join: raw.account.optimization_options.join,
            bigClusterOptimize: raw.account.optimization_options.big_cluster_optimize,
            lastPositionOptimize: raw.account.optimization_options.last_position_optimize,
            displayedOptions: raw.account.optimization_options.displayed_options,
            fmv: raw.account.optimization_options.fmv,
            singleTour: raw.account.optimization_options.single_tour,
            beauty: raw.account.optimization_options.beauty
        };

        account = {
            id: raw.account.id,
            country: raw.account.country,
            status: raw.account.status,
            name: raw.account.name,
            activeUntil: raw.account.active_until,
            planQuantity: raw.account.plan_quantity,
            optimizationOptions,
            configs: raw.account.configs,
            timezone: raw.account.timezone,
            vehicleQuantity: raw.account.vehicle_quantity,
        };
    }

    return {
        id: raw.id,
        username: raw.username,
        name: raw.name,
        phone: raw.phone,
        email: raw.email,
        created: raw.created,
        modified: raw.modified,
        lastLogin: raw.last_login,
        account,
    };
};
