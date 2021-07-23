import React from "react";
import {useDispatch} from "react-redux";

import {fetchConfirmedUser} from "../redux/actions/user";

const Confirmed = ({
    match: {
        params: {hash},
    },
}) => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchConfirmedUser(hash));
    }, []);

    return null;
};

export default Confirmed;
