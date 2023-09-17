

export const api_routes = {
	'admin.login': '/v1/auth/admin/login',
	'admin.logout': '/v1/auth/user/logout',
	'users.some': '/v1/admin/users',
	'users.one': '/v1/admin/users/{id}',
	'users.me': '/v1/users/me',
	'plans.all': '/v1/plans',
	'plans.one': `/v1/plans/{id}`,
	'plans.patch': `/v1/admin/plans/{id}`,
	'promo.codes': `/v1/admin/promo-codes`,
	'promo.active': `/v1/admin/promo-codes/active`,
	'settings.all': `/v1/settings`,
	'settings.grouped': `/v1/settings/grouped`,
	'settings.one': `/v1/settings/{key}`,
	'tools.all': '/v1/admin/tools',
	'tools.one': '/v1/tools/{id}',
};
