import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import * as teamActions from "../store/team/team.actions"
import * as blogActions from "../store/blog/blog.actions"
import {countPage as count} from "../store/blog/blogSlice.slice"

const rootActions = {
    count,
    ...teamActions,
    ...blogActions,
};

export const useActions = () => {
    const dispatch = useDispatch();

    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};