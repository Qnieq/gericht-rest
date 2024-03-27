import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import * as teamActions from "../store/team/team.actions"
import * as blogActions from "../store/blog/blog.actions"
import * as usersActions from "../store/users/usersAction.action"
import {countPage as count} from "../store/blog/blogSlice.slice"
import {toggleTagsActive as tagsActive} from "../store/blog/blogTags.slice"
import {addRegRequest as regRequest} from "../store/users/usersRegistration.slice"
import {logoutReg} from "../store/users/usersRegistration.slice"
import {addLoginRequest as loginRequest} from "../store/users/usersByLogin.slice"
import {logoutLogin} from "../store/users/usersByLogin.slice"

const rootActions = {
    count,
    tagsActive,
    regRequest,
    loginRequest,
    logoutReg,
    logoutLogin,
    ...teamActions,
    ...blogActions,
    ...usersActions,
};

export const useActions = () => {
    const dispatch = useDispatch();

    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};