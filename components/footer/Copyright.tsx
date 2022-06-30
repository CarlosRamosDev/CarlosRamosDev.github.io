import React from "react";

function Copyright() {
    return (
        <div className={"flex flex-col justify-center items-center text-center p-5 bg-gray-50"}>
            <h1 className={"text-gray-800 font-semoibold"}>
                &copy; {new Date().getFullYear()} All rights reserved | Built with ️❤️by{" "}
                <a href={"https://github.com/CarlosRamosDev"}>
                    <span className={"hover:text-blue-600 font-semibold cursor"}>
                        Carlos Ramos
                    </span>
                </a>
            </h1>
        </div>
    );
}

export default Copyright;
