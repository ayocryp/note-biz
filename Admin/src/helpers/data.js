
import Cookies from "js-cookie";

// fetching all plans
export const getPlans = async ({ pageParam }) => {
  const response = await fetch(route.api("plans.all"), {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  console.log(route.api("plans.all", { enabled: true, hasSubs: true }));
  const data = (await response.json()).data as Plan[];
  return data;
};

// fetching a plan by id
export const getPlanById = async (id: string): Promise<Plan> => {
  const response = await fetch(route.api("plans.one", { id: id }), {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const data = (await response.json()).data as Plan;
  return data;
};

// tools
export const getTools = async ({ pageParam }) => {
  const access_token = auth.getSessionToken();
  const response = await fetch(route.api("tools.all"), {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token}`,
    },
  });
  console.log(Cookies.get("session_token"));
  const data = (await response.json()).data as Tool[];
  return data;
};

// fetching all tools
// export const getTools = async () => {

//   const response = await API.get(route.api("tools.all"));
//   const data = (await response.json()).data as Tool[]
//   return data;
// }

// fetching a tool by id
export const getToolById = async (id: number): Promise<Tool> => {
  const response = await fetch(route.api("tools.one"), {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const data = (await response.json()) as Tool;
  return data;
};

// settings
export const getSettings = async () => {
  const access_token = auth.getSessionToken();
  const response = await fetch(route.api("settings.all"), {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token}`,
    },
  });
  const data = (await response.json()).data as Setting[];
  return data;
};
export const getGroupedSettings = async () => {
  const access_token = auth.getSessionToken();
  const data = await fetch(route.api("settings.grouped"), {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token}`,
    },
  }).then(resJson);
  // const data = (await response.json()).data as Setting[];
  return data as ApiGroupedSettings;
};

export const groupSettingsByGroupId = ({ settingsData }) => {
  return settingsData.reduce((acc, setting) => {
    if (!acc[setting.groupId]) {
      acc[setting.groupId] = [];
    }
    acc[setting.groupId].push(setting);
    return acc;
  }, {});
};

// fetching a all users

export const getUsers = async ({ page = 1, limit = 5 }): Promise<users[]> => {
  const access_token = auth.getSessionToken();

  const response = await fetch(
    route.api("users.some", { page: page, limit: limit }),
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
    }
  );
  // console.log(route.api("users.some", { enabled: true, hasSubs: true }));
  const data = (await response.json()).data as users[];
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  return data;
};

export const getUserById = async (id: string): Promise<users> => {
  const access_token = auth.getSessionToken();
  const response = await fetch(route.api("users.one", { id: id }), {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token}`,
    },
  });
  const data = (await response.json()).data as users;
  return data;
};

// fetching active promocodes

export const getActivePromocodes = async (): Promise<users> => {
  const access_token = auth.getSessionToken();
  const response = await fetch(route.api("promo.active"), {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token}`,
    },
  });
  const data = (await response.json()).data as users;
  return data;
};
