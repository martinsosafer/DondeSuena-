import React, { useCallback, useEffect } from "react";
import { LandingPage } from "./Landing.styled";
import { Button } from "./Landing.styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
	const navigate = useNavigate();

	return (
		<LandingPage>
			<Button onClick={() => navigate("/")}>LET'S COOK!</Button>
		</LandingPage>
	);
};

export default Landing;
