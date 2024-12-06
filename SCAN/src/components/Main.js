import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import MainService from "./MainService";
import MainSlick from "./MainSlick";
import MainTariffs from "./MainTariffs";

function Main() {

    return (
        <main>
            <MainService />
            <MainSlick />
            <MainTariffs />
        </main>
    );
}

export default Main;