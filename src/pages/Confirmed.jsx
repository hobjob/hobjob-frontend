import React from "react";
import {useDispatch} from "react-redux";

import {fetchConfirmedUser} from "../redux/actions/user";

import {Loader} from "../components/";

const Confirmed = ({
    match: {
        params: {hash},
    },
}) => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchConfirmedUser(hash));
    }, []);

    return <Loader />;
};

export default Confirmed;
