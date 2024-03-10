import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import * as teamActions from "../store/team/team.actions"
import * as blogActions from "../store/blog/blog.actions"
import * as usersActions from "../store/users/usersAction.action"
import {countPage as count} from "../store/blog/blogSlice.slice"
import {toggleTagsActive as tagsActive} from "../store/blog/blogTags.slice"

const rootActions = {
    count,
    tagsActive,
    ...teamActions,
    ...blogActions,
    ...usersActions,
};

export const useActions = () => {
    const dispatch = useDispatch();

    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};