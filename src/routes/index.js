import { acceptRequestRoute } from './acceptRequestRoute';
import { createGroupRoute } from './createGroupRoute';
import { createJoinRequestRoute } from './createJoinRequestRoute';
import { createMessageRoute } from './createMessageRoute';
import { getAllGroupsRoute } from './getAllGroupsRoute';
import { getGroupRoute } from './getGroupRoute';
import { getGroupMessagesRoute } from './getGroupMessagesRoute';
import { getJoinGroupRequestsRoute } from './getJoinGroupRequestsRoute';
import { getUserGroupsRoute } from './getUserGroupsRoute';
import { rejectRequestRoute } from './rejectRequestRoute';

export const routes = [
    acceptRequestRoute,
    createGroupRoute,
    createJoinRequestRoute,
    createMessageRoute,
    getAllGroupsRoute,
    getGroupRoute,
    getGroupMessagesRoute,
    getJoinGroupRequestsRoute,
    getUserGroupsRoute,
    rejectRequestRoute,
];