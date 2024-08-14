import * as React from "react";
import { cx } from "../utils";

const LinkedInIcon = ({ className, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={42}
        height={43}
        viewBox="0 0 42 43"
        {...rest}
        className={cx(className, "w-full h-auto")}
    >
        <g clipPath="url(#a)">
            <path
                fill="#0076B2"
                d="M38.063 1.792H3.937A2.924 2.924 0 0 0 .985 4.679v34.263a2.924 2.924 0 0 0 2.954 2.881h34.124a2.93 2.93 0 0 0 2.954-2.89V4.67a2.93 2.93 0 0 0-2.953-2.878Z"
            />
            <path
                fill="#fff"
                d="M6.91 16.797h5.943v19.12H6.91v-19.12Zm2.973-9.516a3.445 3.445 0 1 1 0 6.891 3.445 3.445 0 0 1 0-6.89Zm6.697 9.516h5.696v2.625h.08c.793-1.503 2.73-3.088 5.62-3.088 6.018-.013 7.133 3.948 7.133 9.083v10.5h-5.942v-9.302c0-2.215-.04-5.067-3.088-5.067s-3.566 2.415-3.566 4.922v9.447H16.58v-19.12Z"
            />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 .808h42v42H0z" />
            </clipPath>
        </defs>
    </svg>
);

export default LinkedInIcon;

export const SunIcon = ({ className, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        {...rest}
        className={cx("w-full h-auto", className)}
    >
        <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
        <g
            fill="none"
            stroke="currentColor"
            strokeDasharray="2"
            strokeDashoffset="2"
            strokeLinecap="round"
            strokeWidth="2"
        >
            <path d="M0 0">
                <animate
                    fill="freeze"
                    attributeName="d"
                    begin="1.2s"
                    dur="0.2s"
                    values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
                />
                <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="1.2s"
                    dur="0.2s"
                    values="2;0"
                />
            </path>
            <path d="M0 0">
                <animate
                    fill="freeze"
                    attributeName="d"
                    begin="1.5s"
                    dur="0.2s"
                    values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
                />
                <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="1.5s"
                    dur="1.2s"
                    values="2;0"
                />
            </path>
            <animateTransform
                attributeName="transform"
                dur="30s"
                repeatCount="indefinite"
                type="rotate"
                values="0 12 12;360 12 12"
            />
        </g>
        <g fill="currentColor">
            <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    dur="0.4s"
                    values="1;0"
                />
            </path>
            <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="0.2s"
                    dur="0.4s"
                    values="1;0"
                />
            </path>
        </g>
        <g
            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        >
            <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
            <set attributeName="opacity" begin="0.6s" to="0" />
        </g>
        <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
            <circle cx="12" cy="12" r="12" fill="#fff" />
            <circle cx="18" cy="6" r="12" fill="#fff">
                <animate
                    fill="freeze"
                    attributeName="cx"
                    begin="0.6s"
                    dur="0.4s"
                    values="18;22"
                />
                <animate
                    fill="freeze"
                    attributeName="cy"
                    begin="0.6s"
                    dur="0.4s"
                    values="6;2"
                />
                <animate
                    fill="freeze"
                    attributeName="r"
                    begin="0.6s"
                    dur="0.4s"
                    values="12;3"
                />
            </circle>
            <circle cx="18" cy="6" r="10">
                <animate
                    fill="freeze"
                    attributeName="cx"
                    begin="0.6s"
                    dur="0.4s"
                    values="18;22"
                />
                <animate
                    fill="freeze"
                    attributeName="cy"
                    begin="0.6s"
                    dur="0.4s"
                    values="6;2"
                />
                <animate
                    fill="freeze"
                    attributeName="r"
                    begin="0.6s"
                    dur="0.4s"
                    values="10;1"
                />
            </circle>
        </mask>
        <circle
            cx="12"
            cy="12"
            r="10"
            fill="currentColor"
            mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
            opacity="0"
        >
            <set attributeName="opacity" begin="0.6s" to="1" />
            <animate
                fill="freeze"
                attributeName="r"
                begin="0.6s"
                dur="0.4s"
                values="10;6"
            />
        </circle>
    </svg>
);

export const MoonIcon = ({ className, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        {...rest}
        className={cx("w-full h-auto", className)}
    >
        <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        >
            <g strokeDasharray="2">
                <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
                    <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        dur="0.2s"
                        values="4;2"
                    />
                </path>
                <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
                    <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="0.2s"
                        dur="0.2s"
                        values="4;2"
                    />
                </path>
            </g>
            <path
                fill="currentColor"
                d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
                opacity="0"
            >
                <set attributeName="opacity" begin="0.5s" to="1" />
            </path>
        </g>
        <g fill="currentColor" fillOpacity="0">
            <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
                <animate
                    id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
                    dur="0.4s"
                    values="0;1"
                />
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
                    dur="0.4s"
                    values="1;0"
                />
            </path>
            <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
                    dur="0.4s"
                    values="0;1"
                />
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
                    dur="0.4s"
                    values="1;0"
                />
            </path>
            <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
                    dur="0.4s"
                    values="0;1"
                />
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
                    dur="0.4s"
                    values="1;0"
                />
            </path>
            <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
                    dur="0.4s"
                    values="0;1"
                />
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
                    dur="0.4s"
                    values="1;0"
                />
            </path>
        </g>
        <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
            <circle cx="12" cy="12" r="12" fill="#fff" />
            <circle cx="22" cy="2" r="3" fill="#fff">
                <animate
                    fill="freeze"
                    attributeName="cx"
                    begin="0.1s"
                    dur="0.4s"
                    values="22;18"
                />
                <animate
                    fill="freeze"
                    attributeName="cy"
                    begin="0.1s"
                    dur="0.4s"
                    values="2;6"
                />
                <animate
                    fill="freeze"
                    attributeName="r"
                    begin="0.1s"
                    dur="0.4s"
                    values="3;12"
                />
            </circle>
            <circle cx="22" cy="2" r="1">
                <animate
                    fill="freeze"
                    attributeName="cx"
                    begin="0.1s"
                    dur="0.4s"
                    values="22;18"
                />
                <animate
                    fill="freeze"
                    attributeName="cy"
                    begin="0.1s"
                    dur="0.4s"
                    values="2;6"
                />
                <animate
                    fill="freeze"
                    attributeName="r"
                    begin="0.1s"
                    dur="0.4s"
                    values="1;10"
                />
            </circle>
        </mask>
        <circle
            cx="12"
            cy="12"
            r="6"
            fill="currentColor"
            mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
        >
            <set attributeName="opacity" begin="0.5s" to="0" />
            <animate
                fill="freeze"
                attributeName="r"
                begin="0.1s"
                dur="0.4s"
                values="6;10"
            />
        </circle>
    </svg>
);

// export const LinkedinIcon = ({ className, ...rest }) => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width={42}
//       height={43}
//       viewBox="0 0 42 43"
//       className={cx("w-full h-auto", className)}
//       {...rest}
//     >
//       <g clipPath="url(#a)">
//         <path
//           fill="#0076B2"
//           d="M38.063 1.792H3.937A2.924 2.924 0 0 0 .985 4.679v34.263a2.924 2.924 0 0 0 2.954 2.881h34.124a2.93 2.93 0 0 0 2.954-2.89V4.67a2.93 2.93 0 0 0-2.953-2.878Z"
//         />
//         <path
//           fill="#fff"
//           d="M6.91 16.797h5.943v19.12H6.91v-19.12Zm2.973-9.516a3.445 3.445 0 1 1 0 6.891 3.445 3.445 0 0 1 0-6.89Zm6.697 9.516h5.696v2.625h.08c.793-1.503 2.73-3.088 5.62-3.088 6.018-.013 7.133 3.948 7.133 9.083v10.5h-5.942v-9.302c0-2.215-.04-5.067-3.088-5.067s-3.566 2.415-3.566 4.922v9.447H16.58v-19.12Z"
//         />
//       </g>
//       <defs>
//         <clipPath id="a">
//           <path fill="#fff" d="M0 .808h42v42H0z" />
//         </clipPath>
//       </defs>
//     </svg>
//   );
// };

export const TwitterIcon = ({ className, ...rest }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={42}
            height={43}
            viewBox="0 0 42 43"
            className={cx("w-full h-auto", className)}
            {...rest}
        >
            <g clipPath="url(#a)">
                <path
                    fill="#1D9BF0"
                    d="M37.7 13.24c.026.37.026.74.026 1.114 0 11.386-8.668 24.517-24.518 24.517v-.006A24.394 24.394 0 0 1 0 35.002a17.303 17.303 0 0 0 12.753-3.571 8.627 8.627 0 0 1-8.05-5.984 8.584 8.584 0 0 0 3.89-.149 8.617 8.617 0 0 1-6.912-8.446v-.11a8.562 8.562 0 0 0 3.91 1.08A8.627 8.627 0 0 1 2.926 6.315a24.457 24.457 0 0 0 17.758 9.002 8.622 8.622 0 0 1 2.494-8.233 8.626 8.626 0 0 1 12.19.374 17.29 17.29 0 0 0 5.473-2.092 8.649 8.649 0 0 1-3.788 4.766A17.135 17.135 0 0 0 42 8.776a17.504 17.504 0 0 1-4.3 4.464Z"
                />
            </g>
            <defs>
                <clipPath id="a">
                    <path fill="#fff" d="M0 .808h42v42H0z" />
                </clipPath>
            </defs>
        </svg>
    );
};

export const GithubIcon = ({ className, ...rest }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={42}
            height={44}
            viewBox="0 0 42 44"
            className={cx("w-full h-auto", className)}
            {...rest}
        >
            <path
                fillRule="evenodd"
                d="M21 1.739c-10.942 0-19.815 9.212-19.815 20.577 0 9.091 5.678 16.804 13.55 19.525.99.191 1.354-.446 1.354-.99 0-.49-.018-2.111-.027-3.83-5.512 1.244-6.675-2.428-6.675-2.428-.902-2.379-2.2-3.011-2.2-3.011-1.799-1.277.135-1.25.135-1.25 1.99.144 3.038 2.12 3.038 2.12 1.767 3.145 4.635 2.236 5.766 1.71.177-1.33.691-2.238 1.258-2.752-4.401-.52-9.028-2.284-9.028-10.168 0-2.247.774-4.082 2.042-5.524-.206-.518-.885-2.61.191-5.445 0 0 1.664-.553 5.45 2.11A18.325 18.325 0 0 1 21 11.688c1.683.008 3.38.236 4.963.693 3.782-2.663 5.444-2.11 5.444-2.11 1.079 2.834.4 4.928.195 5.445 1.27 1.442 2.039 3.277 2.039 5.524 0 7.903-4.635 9.643-9.048 10.153.711.638 1.345 1.891 1.345 3.81 0 2.754-.023 4.97-.023 5.647 0 .548.357 1.19 1.36.987 7.87-2.724 13.54-10.434 13.54-19.522 0-11.364-8.872-20.577-19.815-20.577Z"
                clipRule="evenodd"
            />
            <path d="M8.69 31.282c-.044.103-.198.133-.34.063-.144-.066-.224-.206-.178-.308.043-.106.198-.135.342-.064.144.067.226.207.176.31Zm.803.93c-.095.091-.28.049-.405-.095-.13-.143-.154-.335-.058-.427.098-.091.277-.048.407.095.13.145.155.335.056.428Zm.781 1.185c-.121.088-.32.006-.443-.177-.121-.183-.121-.403.004-.49.122-.089.318-.01.442.172.121.186.121.406-.003.495Zm1.07 1.145c-.108.125-.34.091-.509-.078-.173-.166-.221-.402-.113-.526.11-.125.343-.09.514.078.173.166.225.402.109.526Zm1.477.665c-.048.161-.27.234-.496.166-.224-.07-.37-.26-.324-.422.045-.163.27-.239.496-.165.224.07.37.257.324.421Zm1.622.123c.005.17-.185.31-.42.314-.237.005-.43-.132-.432-.3 0-.17.187-.31.424-.314.235-.005.428.132.428.3Zm1.508-.266c.029.165-.135.335-.369.38-.23.045-.443-.058-.473-.222-.028-.17.139-.34.369-.384.234-.042.444.058.473.226Z" />
        </svg>
    );
};

export const DribbbleIcon = ({ className, ...rest }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={42}
            height={43}
            viewBox="0 0 42 43"
            className={cx("w-full h-auto", className)}
            {...rest}
        >
            <g clipPath="url(#a)">
                <path
                    fill="#E74D89"
                    d="M21 2.202c10.828 0 19.59 8.761 19.59 19.573 0 10.812-8.762 19.589-19.59 19.589S1.41 32.603 1.41 21.79C1.412 10.98 10.173 2.202 21 2.202Z"
                />
                <path
                    fill="#B2215A"
                    d="M21 42.758c-11.583 0-21-9.4-21-20.967C0 10.208 9.417.808 21 .808s21 9.4 21 20.967c0 11.566-9.417 20.983-21 20.983Zm17.702-18.112c-.607-.197-5.545-1.657-11.172-.771 2.346 6.431 3.297 11.681 3.478 12.764 4.036-2.707 6.907-7.006 7.694-11.993Zm-10.696 13.65c-.263-1.575-1.313-7.055-3.823-13.584a.304.304 0 0 1-.115.032c-10.123 3.528-13.749 10.533-14.077 11.19A17.866 17.866 0 0 0 21 39.706a17.525 17.525 0 0 0 7.006-1.411ZM7.678 33.784c.41-.689 5.332-8.826 14.585-11.829.23-.082.476-.147.706-.213a46.698 46.698 0 0 0-1.46-3.035C12.55 21.38 3.855 21.267 3.068 21.25c0 .18-.016.36-.016.541a17.927 17.927 0 0 0 4.626 11.993ZM3.445 18.133c.804.016 8.187.049 16.587-2.182-2.97-5.283-6.185-9.713-6.645-10.353-5.036 2.363-8.777 6.99-9.942 12.535ZM16.8 4.384c.492.656 3.757 5.086 6.694 10.484 6.382-2.396 9.072-6.005 9.4-6.464A17.882 17.882 0 0 0 21 3.892c-1.444 0-2.855.18-4.2.492Zm18.08 6.087c-.378.508-3.38 4.364-10.008 7.071.41.853.82 1.723 1.198 2.592.13.312.262.624.393.919 5.972-.755 11.895.46 12.485.574a17.843 17.843 0 0 0-4.068-11.156Z"
                />
            </g>
            <defs>
                <clipPath id="a">
                    <path fill="#fff" d="M0 .808h42v42H0z" />
                </clipPath>
            </defs>
        </svg>
    );
};

export const UserProfileIcon = ({ className, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        width={42}
        height={43}
        fill="black"
        stroke="black"
        strokeWidth={4.096}
        viewBox="0 0 512 512"
        className={cx("w-full h-auto", className)}
        {...rest}
    >
        <path d="M309.333 277.333h149.333c5.888 0 10.667-4.779 10.667-10.667S464.555 256 458.667 256H309.333c-5.888 0-10.667 4.779-10.667 10.667s4.779 10.666 10.667 10.666zM309.333 213.333h149.333c5.888 0 10.667-4.779 10.667-10.667S464.555 192 458.667 192H309.333c-5.888 0-10.667 4.779-10.667 10.667s4.779 10.666 10.667 10.666zM309.333 341.333h149.333c5.888 0 10.667-4.779 10.667-10.667S464.555 320 458.667 320H309.333c-5.888 0-10.667 4.779-10.667 10.667s4.779 10.666 10.667 10.666zM309.333 405.333h85.333c5.888 0 10.667-4.779 10.667-10.667S400.555 384 394.667 384h-85.333c-5.888 0-10.667 4.779-10.667 10.667s4.778 10.666 10.666 10.666zM138.667 64C132.779 64 128 68.779 128 74.667s4.779 10.667 10.667 10.667 10.667-4.779 10.667-10.667S144.555 64 138.667 64z" />
        <path d="M458.667 21.333H53.333C23.915 21.333 0 45.269 0 74.667v362.667c0 29.397 23.915 53.333 53.333 53.333h405.333c29.419 0 53.333-23.936 53.333-53.333V74.667c.001-29.398-23.914-53.334-53.332-53.334zm32 416c0 17.643-14.357 32-32 32H53.333c-17.643 0-32-14.357-32-32V128h469.333v309.333zm0-330.666H21.333v-32c0-17.643 14.357-32 32-32h405.333c17.643 0 32 14.357 32 32v32z" />
        <path d="M53.333 64c-5.888 0-10.667 4.779-10.667 10.667s4.779 10.667 10.667 10.667S64 80.555 64 74.667 59.221 64 53.333 64zM53.333 405.333l213.333-.021c5.888 0 10.667-4.779 10.667-10.667 0-26.731-18.133-49.941-44.011-56.427l-32.021-8-1.344-5.355c8.299-9.173 14.208-20.885 16.661-33.045a19.98 19.98 0 0 0 10.667-15.253l2.304-18.56a19.908 19.908 0 0 0-4.757-15.573 21.034 21.034 0 0 0-3.883-3.413l.533-11.328 1.941-1.941c5.504-5.845 12.949-18.325 1.173-36.331-5.589-8.555-17.109-18.752-40.192-18.752-6.805 0-22.144 0-37.035 9.323-43.904 1.557-49.067 25.216-49.067 43.072 0 3.52.64 10.112 1.237 15.616a20.065 20.065 0 0 0-4.288 3.669 19.849 19.849 0 0 0-4.821 15.659l2.304 18.56c.875 6.955 5.291 12.715 11.797 15.552 2.389 11.627 7.979 22.891 15.765 31.829l-1.557 6.272-32.021 8a58.11 58.11 0 0 0-44.053 56.448c0 2.837 1.109 5.568 3.115 7.552a10.748 10.748 0 0 0 7.553 3.114zm38.592-46.442 38.229-9.557a10.701 10.701 0 0 0 7.765-7.765l4.544-18.197a10.641 10.641 0 0 0-3.072-10.368c-8.299-7.808-13.803-19.221-14.699-30.528-.448-5.525-5.184-8.597-10.752-8.597l-2.752-16.981a10.62 10.62 0 0 0 8-3.605 10.612 10.612 0 0 0 2.581-8.384c-.811-6.443-2.112-18.091-2.112-21.845 0-11.051 0-21.483 31.189-21.803a10.672 10.672 0 0 0 6.101-1.984C167.104 192 178.795 192 184.405 192c11.008 0 18.325 2.965 22.336 9.088 4.331 6.635 2.56 8.512 1.365 9.813l-4.629 4.629a10.646 10.646 0 0 0-3.115 7.019l-1.131 23.211c-.128 2.901.213 4.928 2.197 7.04 2.005 2.112 4.053 2.539 6.955 2.56l-1.365 17.344a10.652 10.652 0 0 0-10.624 9.813c-.939 11.499-6.848 23.424-15.424 31.125a10.674 10.674 0 0 0-3.221 10.517l4.352 17.429c.96 3.819 3.925 6.827 7.765 7.765l38.251 9.557a36.797 36.797 0 0 1 26.325 25.088l-188.885-.021c3.67-12.158 13.504-21.844 26.368-25.086zM96 64c-5.888 0-10.667 4.779-10.667 10.667S90.112 85.333 96 85.333s10.667-4.779 10.667-10.667S101.888 64 96 64z" />
    </svg>
);
