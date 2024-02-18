import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import * as teamActions from "../store/team/team.actions"
import * as blogActions from "../store/blog/blog.actions"

const rootActions = {
    ...teamActions,
    ...blogActions,
};

export const useActions = () => {
    const dispatch = useDispatch();

    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};