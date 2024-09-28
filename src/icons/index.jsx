import VideoIconPic from '../assets/video-icon.png'
import PhotoIconPic from '../assets/photo-icon.png'
import SmileIconPic from '../assets/smile-icon.png'

export function FacebookLogo(props) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={16} cy={16} r={14} fill="url(#a)" />
      <path
        d="M21.214 20.282l.622-3.952h-3.89v-2.563c0-1.081.542-2.136 2.284-2.136H22V8.267S20.395 8 18.86 8c-3.205 0-5.298 1.893-5.298 5.318v3.012H10v3.952h3.562v9.552a14.468 14.468 0 004.383 0v-9.552h3.269z"
        fill="#fff"
      />
      <defs>
        <linearGradient
          id="a"
          x1={16}
          y1={2}
          x2={16}
          y2={29.917}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#18ACFE" />
          <stop offset={1} stopColor="#0163E0" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function SearchIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export function HomeIcon(props) {
  return (
    <svg
      viewBox="0 -0.5 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.417 19a.75.75 0 101.5 0h-1.5zm.75-2.333h-.75.75zM14.085 19a.75.75 0 101.5 0h-1.5zm-3.918.75a.75.75 0 100-1.5v1.5zM7.833 19l-.007.75h.007V19zm-2.032-1.747l-.75.028c.002.03.005.061.01.092l.74-.12zm-.269-7.26l.75-.027a.75.75 0 00-.011-.102l-.739.13zm1.112-2.251l-.34-.668-.006.002.346.666zm4.935-2.519l.341.668h.002l-.343-.668zm1.845 0l-.342.667.001.001.341-.668zm4.935 2.519l.346-.666-.005-.002-.34.668zm1.112 2.252l-.738-.13a.761.761 0 00-.011.102l.75.028zm-.27 7.259l.74.12a.75.75 0 00.01-.092l-.75-.028zM17.17 19v.75h.008l-.008-.75zm-2.334-.75a.75.75 0 000 1.5v-1.5zm-4.668 0a.75.75 0 100 1.5v-1.5zm4.668 1.5a.75.75 0 100-1.5v1.5zM10.917 19v-2.333h-1.5V19h1.5zm0-2.333c0-.875.71-1.584 1.584-1.584v-1.5a3.084 3.084 0 00-3.084 3.084h1.5zm1.584-1.584c.875 0 1.584.71 1.584 1.584h1.5a3.084 3.084 0 00-3.084-3.084v1.5zm1.584 1.584V19h1.5v-2.333h-1.5zm-3.918 1.583H7.833v1.5h2.334v-1.5zm-2.326 0a1.33 1.33 0 01-1.3-1.117l-1.48.24a2.83 2.83 0 002.765 2.377l.015-1.5zm-1.29-1.025l-.27-7.259-1.498.056.269 7.259 1.499-.056zm-.28-7.361c-.104-.59.187-1.18.72-1.457l-.693-1.33a2.873 2.873 0 00-1.504 3.047l1.477-.26zm.714-1.454l4.935-2.519-.682-1.336-4.935 2.519.682 1.336zm4.937-2.52a1.27 1.27 0 011.16 0l.685-1.334a2.77 2.77 0 00-2.53 0l.685 1.334zm1.161.001l4.935 2.519.682-1.336-4.935-2.52-.682 1.337zm4.93 2.516c.532.277.824.866.72 1.457l1.477.26a2.873 2.873 0 00-1.505-3.048l-.691 1.331zm.709 1.56l-.27 7.258 1.499.056.27-7.26-1.5-.055zm-.261 7.166a1.33 1.33 0 01-1.3 1.117l.016 1.5a2.83 2.83 0 002.765-2.377l-1.481-.24zm-1.292 1.117h-2.334v1.5h2.334v-1.5zm-7.002 1.5h4.668v-1.5h-4.668v1.5z"
        fill="#000"
      />
    </svg>
  )
}

export function PlayIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9.5 8.965c0-.477 0-.716.1-.849a.5.5 0 01.364-.199c.166-.012.367.117.769.375l4.72 3.035c.349.224.523.336.583.478a.5.5 0 010 .39c-.06.142-.234.254-.583.478l-4.72 3.035c-.402.258-.603.387-.769.375a.5.5 0 01-.364-.2c-.1-.132-.1-.371-.1-.848v-6.07z" />
        <path d="M3 7.8c0-1.68 0-2.52.327-3.162a3 3 0 011.311-1.311C5.28 3 6.12 3 7.8 3h8.4c1.68 0 2.52 0 3.162.327a3 3 0 011.311 1.311C21 5.28 21 6.12 21 7.8v8.4c0 1.68 0 2.52-.327 3.162a3 3 0 01-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 01-1.311-1.311C3 18.72 3 17.88 3 16.2V7.8z" />
      </g>
    </svg>
  )
}

export function ShopIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.435 1.25h9.13c.57 0 1.054 0 1.453.041.426.044.82.14 1.192.37.371.23.633.539.863.9.215.34.432.772.687 1.282l.016.033c.01.02.019.039.027.06l1.403 3.547c.168.423.353.95.407 1.488.055.552-.02 1.183-.453 1.73a2.753 2.753 0 01-1.41.945v9.604H22a.75.75 0 010 1.5H2a.75.75 0 010-1.5h1.25v-9.604a2.754 2.754 0 01-1.41-.944c-.432-.548-.508-1.18-.453-1.73.054-.54.24-1.066.406-1.489l1.404-3.548a.747.747 0 01.027-.06l.016-.032c.255-.51.471-.943.687-1.282.23-.361.492-.67.863-.9.372-.23.766-.326 1.191-.37.4-.041.884-.041 1.454-.041zM18 10.887a2.75 2.75 0 001.25.76v9.603h-4v-2.782c0-.44 0-.82-.028-1.13-.03-.33-.096-.656-.273-.963a2.251 2.251 0 00-.824-.824c-.307-.177-.633-.243-.962-.273-.312-.028-.691-.028-1.13-.028h-.065c-.44 0-.82 0-1.13.028-.33.03-.656.096-.963.273a2.25 2.25 0 00-.824.824c-.177.307-.243.633-.273.962-.028.312-.028.691-.028 1.13v2.783h-4v-9.604A2.75 2.75 0 006 10.887a2.742 2.742 0 002 .863c.788 0 1.499-.331 2-.863a2.742 2.742 0 002 .863c.788 0 1.498-.331 2-.863a2.742 2.742 0 002 .863c.788 0 1.498-.331 2-.863zM10.25 21.25h3.5V18.5c0-.481 0-.792-.022-1.027-.02-.225-.055-.307-.079-.348a.75.75 0 00-.274-.274c-.04-.024-.123-.058-.348-.079A12.776 12.776 0 0012 16.75c-.481 0-.792 0-1.027.022-.225.02-.307.055-.348.079a.75.75 0 00-.274.274c-.024.04-.059.123-.079.348-.021.235-.022.546-.022 1.027v2.75zM6.75 9a1.25 1.25 0 002.5 0 .75.75 0 011.5 0 1.25 1.25 0 002.5 0 .75.75 0 011.5 0 1.25 1.25 0 002.5 0 .75.75 0 011.5 0 1.25 1.25 0 002.232.773c.114-.144.17-.342.138-.652-.032-.322-.151-.688-.308-1.086L19.42 4.517c-.268-.535-.447-.89-.613-1.15-.16-.252-.274-.361-.386-.43-.111-.07-.26-.123-.557-.154-.314-.032-.72-.033-1.336-.033H7.472c-.617 0-1.023 0-1.336.033-.297.031-.446.085-.557.154-.112.069-.226.178-.386.43-.167.26-.345.615-.613 1.15L3.188 8.035c-.157.398-.276.764-.308 1.086-.031.31.024.508.138.652A1.25 1.25 0 005.25 9a.75.75 0 011.5 0z"
        fill="#1C274C"
      />
    </svg>
  )
}

export function GroupIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={12} cy={8} r={2.5} stroke="#222" strokeLinecap="round" />
      <path
        d="M13.768 6.5a2 2 0 11.732 2.732M10.232 6.5A2 2 0 109.5 9.232"
        stroke="#222"
      />
      <path
        d="M12 12.5c4.08 0 5.134 3.302 5.405 5.007.087.545-.353.993-.905.993h-9c-.552 0-.992-.448-.905-.993C6.866 15.802 7.92 12.5 12 12.5z"
        stroke="#222"
        strokeLinecap="round"
      />
      <path
        d="M19.297 15.416l-.486.122.486-.122zm-6.21-2.83l-.37-.337-.62.68.908.15.082-.493zm4.094 3.914l-.48.139.104.361h.376v-.5zM15.5 12c1.028 0 1.75.503 2.278 1.207.54.718.856 1.624 1.034 2.33l.97-.242c-.192-.764-.55-1.816-1.204-2.688C17.913 11.72 16.92 11 15.5 11v1zm-2.044.923c.5-.548 1.155-.923 2.044-.923v-1c-1.217 0-2.126.53-2.782 1.249l.738.674zm-.45.156c2.3.382 3.273 2.101 3.695 3.56l.96-.278c-.47-1.628-1.642-3.795-4.492-4.268l-.164.986zM18.394 16h-1.214v1h1.214v-1zm.416-.462c.054.215-.104.462-.416.462v1c.87 0 1.62-.772 1.387-1.705l-.97.243zM10.913 12.586l.082.493.908-.15-.62-.68-.37.337zm-6.21 2.83l.485.122-.485-.122zM6.82 16.5v.5h.376l.104-.361-.48-.139zM8.5 12c.89 0 1.543.375 2.044.923l.738-.674C10.626 11.53 9.717 11 8.5 11v1zm-3.312 3.538c.178-.707.494-1.613 1.034-2.331C6.75 12.503 7.472 12 8.5 12v-1c-1.42 0-2.413.72-3.078 1.607-.655.872-1.012 1.925-1.204 2.688l.97.243zm.417.462c-.313 0-.47-.247-.417-.462l-.97-.243C3.985 16.228 4.734 17 5.605 17v-1zm1.214 0H5.605v1h1.214v-1zm.48.639c.422-1.459 1.395-3.178 3.696-3.56l-.164-.986c-2.85.473-4.021 2.64-4.493 4.268l.961.278z"
        fill="#222"
      />
    </svg>
  )
}

export function MenuIcon(props) {
  return (
    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M0 0h4v4H0V0zm0 6h4v4H0V6zm0 6h4v4H0v-4zM6 0h4v4H6V0zm0 6h4v4H6V6zm0 6h4v4H6v-4zm6-12h4v4h-4V0zm0 6h4v4h-4V6zm0 6h4v4h-4v-4z"
        fillRule="evenodd"
      />
    </svg>
  )
}

export function MessengerIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.002 2C6.369 2 2 6.126 2 11.701c0 2.916 1.195 5.435 3.14 7.174.162.146.26.349.268.57l.056 1.78a.798.798 0 001.121.705l1.986-.875a.81.81 0 01.533-.04c.912.25 1.883.386 2.895.386C17.63 21.4 22 17.275 22 11.7 22 6.125 17.632 2 12.002 2zm5.25 7.579L14.75 13.55a1.28 1.28 0 01-1.85.342l-1.992-1.493a.513.513 0 00-.615 0l-2.688 2.04c-.356.273-.828-.157-.589-.536L9.52 9.932a1.28 1.28 0 011.85-.342l1.992 1.493a.514.514 0 00.614 0l2.688-2.04c.36-.277.832.153.589.536z"
        fill="#000"
      />
    </svg>
  )
}

export function NotificationIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.313 12.463C6.2 9.293 8.61 6.625 11.701 6.5c3.091.125 5.501 2.792 5.388 5.963 0 1.317 1.395 2.6 1.436 3.92v.056c.03.846-.613 1.557-1.437 1.59h-3.112a2.583 2.583 0 01-.666 1.747 2.162 2.162 0 01-1.609.724 2.162 2.162 0 01-1.609-.724 2.582 2.582 0 01-.666-1.747H6.313c-.824-.033-1.467-.744-1.437-1.59v-.056c.042-1.316 1.437-2.602 1.437-3.92z"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.426 17.279a.75.75 0 000 1.5v-1.5zm4.55 1.5a.75.75 0 000-1.5v1.5zm-1.3-13.529a.75.75 0 000-1.5v1.5zm-1.95-1.5a.75.75 0 000 1.5v-1.5zm-1.3 15.029h4.55v-1.5h-4.55v1.5zm3.25-15.029h-1.95v1.5h1.95v-1.5z"
        fill="#000"
      />
    </svg>
  )
}

export function FriendIcon(props) {
  return (
    <svg
      fill="#697cb5"
      viewBox="-3 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#697cb5"
      {...props}
    >
      <path d="M17.25 20.5c1.281.719 2 1.906 1.875 3.125-.063.75-.031.75-1 .875-.594.063-4.375.094-8.219.094-4.375 0-8.938-.031-9.281-.125-1.281-.344-.531-2.719 1.156-3.844 1.344-.844 4.063-2.156 4.813-2.313 1.031-.219 1.156-.875 0-2.844-.25-.469-.531-1.813-.563-3.25C6 9.905 6.406 8.343 8.437 7.562a3.977 3.977 0 011.219-.188c1.344 0 2.594.75 3.125 1.844.719 1.469.375 5.313-.375 6.719-.906 1.594-.813 2.094.188 2.344.625.156 2.688 1.125 4.656 2.219zm6.844-1.969c1 .531 1.563 1.5 1.469 2.438-.031.563-.031.594-.781.688-.375.063-2.344.094-4.656.094-.406-.969-1.188-1.844-2.25-2.406a41.827 41.827 0 00-3.75-1.875c.719-.344 1.344-.625 1.625-.688.781-.188.875-.625 0-2.188-.219-.375-.469-1.438-.5-2.563-.031-1.813.375-3.063 1.938-3.656.313-.094.656-.156.969-.156 1.031 0 2 .563 2.406 1.438.531 1.156.281 4.156-.281 5.281-.688 1.25-.625 1.625.156 1.813.5.125 2.094.906 3.656 1.781z" />
    </svg>
  )
}

export function ClockIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M22.7 13.5l-2-2-2 2M21 12a9 9 0 11-1.245-4.57M12 7v5l3 2"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function BookmarkIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5 6.2c0-1.12 0-1.68.218-2.108a2 2 0 01.874-.874C6.52 3 7.08 3 8.2 3h7.6c1.12 0 1.68 0 2.108.218a2 2 0 01.874.874C19 4.52 19 5.08 19 6.2V21l-7-5-7 5V6.2z"
        stroke="#000"
        strokeWidth={2}
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function MoreIcon(props) {
  return (
    <svg
      viewBox="0 0 1024 1024"
      className="icon"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M478.312 644.16c24.38 26.901 64.507 26.538 88.507-.89l270.57-309.222c7.758-8.867 6.86-22.344-2.008-30.103-8.866-7.759-22.344-6.86-30.103 2.007L534.71 615.173c-7.202 8.231-17.541 8.325-24.782.335L229.14 305.674c-7.912-8.73-21.403-9.394-30.133-1.482s-9.394 21.403-1.482 30.134l280.786 309.833z" />
    </svg>
  )
}

export function VideoIcon(props) {
  return (
    <img {...props} alt="" className="xz74otr" referrerPolicy="origin-when-cross-origin" src={VideoIconPic}></img>
  )
}

export function PhotoIcon(props) {
  return (
    <img {...props} alt="" referrerPolicy="origin-when-cross-origin" src={PhotoIconPic}></img>
  )
}

export function SmileIcon(props) {
  return (
    <img {...props} alt="" className="xz74otr" referrerPolicy="origin-when-cross-origin" src={SmileIconPic}></img>
  )
}

export function ThreeDotIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="#1C274C">
        <path d="M7 12a2 2 0 11-4 0 2 2 0 014 0zM14 12a2 2 0 11-4 0 2 2 0 014 0zM21 12a2 2 0 11-4 0 2 2 0 014 0z" />
      </g>
    </svg>
  )
}

export function CloseIcon(props) {
  return (
    <svg
      viewBox="-0.5 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 21.32l18-18M3 3.32l18 18" />
      </g>
    </svg>
  )
}

export function LikeIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20.975 12.185l-.739-.128.74.128zm-.705 4.08l-.74-.128.74.128zM6.938 20.477l-.747.065.747-.065zm-.812-9.393l.747-.064-.747.064zm7.869-5.863l.74.122-.74-.122zm-.663 4.045l.74.121-.74-.121zm-6.634.411l-.49-.568.49.568zm1.439-1.24l.49.569-.49-.568zm2.381-3.653l-.726-.189.726.189zm.476-1.834l.726.188-.726-.188zm1.674-.886l-.23.714.23-.714zm.145.047l.229-.714-.23.714zM9.862 6.463l.662.353-.662-.353zm4.043-3.215l-.726.188.726-.188zm-2.23-1.116l-.326-.675.325.675zM3.971 21.471l-.748.064.748-.064zM3 10.234l.747-.064a.75.75 0 00-1.497.064H3zm17.236 1.823l-.705 4.08 1.478.256.705-4.08-1.478-.256zm-6.991 9.193H8.596v1.5h4.649v-1.5zm-5.56-.837l-.812-9.393-1.495.129.813 9.393 1.494-.13zm11.846-4.276c-.507 2.93-3.15 5.113-6.286 5.113v1.5c3.826 0 7.126-2.669 7.764-6.357l-1.478-.256zM13.255 5.1l-.663 4.045 1.48.242.663-4.044-1.48-.243zm-6.067 5.146l1.438-1.24-.979-1.136L6.21 9.11l.979 1.136zm4.056-5.274l.476-1.834-1.452-.376-.476 1.833 1.452.377zm1.194-2.194l.145.047.459-1.428-.145-.047-.459 1.428zm-1.915 4.038a8.378 8.378 0 00.721-1.844l-1.452-.377A6.878 6.878 0 019.2 6.11l1.324.707zm2.06-3.991a.885.885 0 01.596.61l1.452-.376a2.385 2.385 0 00-1.589-1.662l-.459 1.428zm-.863.313a.515.515 0 01.28-.33l-.651-1.351c-.532.256-.932.73-1.081 1.305l1.452.376zm.28-.33a.596.596 0 01.438-.03l.459-1.428a2.096 2.096 0 00-1.548.107l.65 1.351zm2.154 8.176h5.18v-1.5h-5.18v1.5zM4.719 21.406L3.747 10.17l-1.494.129.971 11.236 1.495-.129zm-.969.107V10.234h-1.5v11.279h1.5zm-.526.022a.263.263 0 01.263-.285v1.5c.726 0 1.294-.622 1.232-1.344l-1.495.13zM14.735 5.343a5.533 5.533 0 00-.104-2.284l-1.452.377a4.03 4.03 0 01.076 1.664l1.48.243zM8.596 21.25a.916.916 0 01-.911-.837l-1.494.129a2.416 2.416 0 002.405 2.208v-1.5zm.03-12.244c.68-.586 1.413-1.283 1.898-2.19L9.2 6.109c-.346.649-.897 1.196-1.553 1.76l.98 1.137zm13.088 3.307a2.416 2.416 0 00-2.38-2.829v1.5c.567 0 1 .512.902 1.073l1.478.256zM3.487 21.25c.146 0 .263.118.263.263h-1.5c0 .682.553 1.237 1.237 1.237v-1.5zm9.105-12.105a1.583 1.583 0 001.562 1.84v-1.5a.083.083 0 01-.082-.098l-1.48-.242zm-5.72 1.875a.918.918 0 01.316-.774l-.98-1.137a2.418 2.418 0 00-.83 2.04l1.495-.13z"
        fill="white"
      />
    </svg>
  )
}

export function LikeIcon2(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20.975 12.185l-.739-.128.74.128zm-.705 4.08l-.74-.128.74.128zM6.938 20.477l-.747.065.747-.065zm-.812-9.393l.747-.064-.747.064zm7.869-5.863l.74.122-.74-.122zm-.663 4.045l.74.121-.74-.121zm-6.634.411l-.49-.568.49.568zm1.439-1.24l.49.569-.49-.568zm2.381-3.653l-.726-.189.726.189zm.476-1.834l.726.188-.726-.188zm1.674-.886l-.23.714.23-.714zm.145.047l.229-.714-.23.714zM9.862 6.463l.662.353-.662-.353zm4.043-3.215l-.726.188.726-.188zm-2.23-1.116l-.326-.675.325.675zM3.971 21.471l-.748.064.748-.064zM3 10.234l.747-.064a.75.75 0 00-1.497.064H3zm17.236 1.823l-.705 4.08 1.478.256.705-4.08-1.478-.256zm-6.991 9.193H8.596v1.5h4.649v-1.5zm-5.56-.837l-.812-9.393-1.495.129.813 9.393 1.494-.13zm11.846-4.276c-.507 2.93-3.15 5.113-6.286 5.113v1.5c3.826 0 7.126-2.669 7.764-6.357l-1.478-.256zM13.255 5.1l-.663 4.045 1.48.242.663-4.044-1.48-.243zm-6.067 5.146l1.438-1.24-.979-1.136L6.21 9.11l.979 1.136zm4.056-5.274l.476-1.834-1.452-.376-.476 1.833 1.452.377zm1.194-2.194l.145.047.459-1.428-.145-.047-.459 1.428zm-1.915 4.038a8.378 8.378 0 00.721-1.844l-1.452-.377A6.878 6.878 0 019.2 6.11l1.324.707zm2.06-3.991a.885.885 0 01.596.61l1.452-.376a2.385 2.385 0 00-1.589-1.662l-.459 1.428zm-.863.313a.515.515 0 01.28-.33l-.651-1.351c-.532.256-.932.73-1.081 1.305l1.452.376zm.28-.33a.596.596 0 01.438-.03l.459-1.428a2.096 2.096 0 00-1.548.107l.65 1.351zm2.154 8.176h5.18v-1.5h-5.18v1.5zM4.719 21.406L3.747 10.17l-1.494.129.971 11.236 1.495-.129zm-.969.107V10.234h-1.5v11.279h1.5zm-.526.022a.263.263 0 01.263-.285v1.5c.726 0 1.294-.622 1.232-1.344l-1.495.13zM14.735 5.343a5.533 5.533 0 00-.104-2.284l-1.452.377a4.03 4.03 0 01.076 1.664l1.48.243zM8.596 21.25a.916.916 0 01-.911-.837l-1.494.129a2.416 2.416 0 002.405 2.208v-1.5zm.03-12.244c.68-.586 1.413-1.283 1.898-2.19L9.2 6.109c-.346.649-.897 1.196-1.553 1.76l.98 1.137zm13.088 3.307a2.416 2.416 0 00-2.38-2.829v1.5c.567 0 1 .512.902 1.073l1.478.256zM3.487 21.25c.146 0 .263.118.263.263h-1.5c0 .682.553 1.237 1.237 1.237v-1.5zm9.105-12.105a1.583 1.583 0 001.562 1.84v-1.5a.083.083 0 01-.082-.098l-1.48-.242zm-5.72 1.875a.918.918 0 01.316-.774l-.98-1.137a2.418 2.418 0 00-.83 2.04l1.495-.13z"
        fill="silver"
      />
    </svg>
  )
}

export function ChatIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform="scale(-1 1)"
      {...props}
    >
      <path
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.6.376 3.112 1.043 4.453.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 001.591 1.591l2.226-.595a1.634 1.634 0 011.149.133A9.958 9.958 0 0012 22z"
        stroke="#1C274C"
        strokeWidth={1.5}
      />
    </svg>
  )
}

export function ShareIcon(props) {
  return (
    <svg
      viewBox="-0.5 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.47 4.14c-.73.22-1.19 1.82-1.38 3.77C6.78 7.91 2 13.48 2 20.08c2.19-6 7-7.63 10.14-7.63.2 1.76.65 3.17 1.33 3.37 2.1.61 8.53-3.38 8.53-5.84s-6.43-6.45-8.53-5.84z"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function FacebookTitle(props) {
  return (
    <svg fill="none" viewBox="0 0 1090 360"
      {...props}
    >
      <g className="layer">
        <path
          d="M881.58 257.9h29.48v-47.7l41.14 47.7h36.07l-47.89-54.97 40.91-47.67h-32.82l-37.41 43.93v-96.98l-29.48 3.87V257.9zM813.6 152.64c-32.73 0-55.46 22.01-55.46 53.92s22.73 53.93 55.46 53.93c32.72 0 55.45-22.01 55.45-53.92s-22.73-53.93-55.45-53.93zm0 82.72c-15.17 0-25.56-11.72-25.56-28.8s10.39-28.79 25.56-28.79c15.16 0 25.55 11.72 25.55 28.79s-10.39 28.8-25.55 28.8zm-119.81-82.72c-32.73 0-55.46 22.01-55.46 53.92s22.73 53.93 55.46 53.93c32.73 0 55.45-22.01 55.45-53.93s-22.72-53.92-55.45-53.92zm0 82.72c-15.16 0-25.55-11.72-25.55-28.8s10.39-28.79 25.55-28.79 25.55 11.72 25.55 28.79-10.39 28.8-25.55 28.8zm-112.83-82.72c-13.63 0-24.93 5.35-32.01 15.16v-65.59l-29.51 3.83v151.82h26.16l.52-15.84c6.98 11.82 19.48 18.47 34.84 18.47 27.99 0 48.48-22.72 48.48-53.93 0-31.2-20.39-53.92-48.48-53.92zm-6.98 82.72c-15.16 0-25.55-11.72-25.55-28.8s10.39-28.79 25.55-28.79 25.55 11.72 25.55 28.79-10.39 28.8-25.55 28.8zm-113.64 1.33c-15.65 0-26.88-7.27-30.71-19.8h72.63c.71-3.83 1.2-8.38 1.2-11.43 0-33.02-18.47-52.82-49.51-52.82-31.33 0-53.02 22.01-53.02 53.92 0 32.34 22.73 53.93 56.46 53.93 17.47 0 34.45-5.84 45.06-15.55l-10.61-18.7c-10.29 7.11-20.39 10.45-31.5 10.45zm-6.59-61.13c13.64 0 22.34 8.28 22.34 21.1v.1h-47.08c2.83-13.6 11.63-21.2 24.74-21.2zm-98.99 84.97c13.02-24 30.19-5.85 40.71-15.98l-11.52-19.38c-8.19 6.36-17.47 9.8-26.27 9.8-16.36 0-27.27-15.43-27.27-32.37s10.91-24.38 27.27-24.38c8.08 0 16.88 2.92 24.03 8.08l11.72-19.8c-9.48-8.57-9.68 18.17-38.7-13.83-29.02-32-54.65 22.34-54.65 53.93.03 31.49 41.66 77.93 54.68 53.93zm-93.74-105.27l-.52 15.98c-6.98-11.92-19.48-18.57-34.83-18.57-28.09 0-48.48 22.73-48.48 53.93s20.52 53.93 48.48 53.93c15.35 0 27.89-6.66 34.83-18.48l.52 15.85h26.17V155.26h-26.17zm-28.37 80.1c-15.17 0-25.56-11.72-25.56-28.8s10.39-28.79 25.56-28.79c15.16 0 25.55 11.72 25.55 28.79s-10.42 28.8-25.55 28.8zm-57.67-79.9h-26.52v-8.77c0-13.12 5.13-18.15 18.44-18.15 4.12 0 7.47.1 9.38.29v-22.5c-3.63-1-12.5-2.01-17.63-2.01-27.11 0-39.61 12.79-39.61 40.42v10.68h-16.75v24.81h16.75v77.63h29.45v-77.6h21.95l4.54-24.8z"
          fill="#0866FF"
        />
        <text
          fill="#000"
          fontFamily="Cursive"
          fontSize={24}
          strokeWidth={0}
          textAnchor="middle"
          x={361.5}
          xmlSpace="preserve"
          y={214.25}
        >
          {"CC 18"}
        </text>
      </g>
    </svg>
  )
}

export function AddFriendIcon(props) {
  return (
    <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth={3}
      stroke="#583cbe"
      fill="none"
      {...props}
    >
      <circle cx={29.22} cy={16.28} r={11.14} />
      <path d="M41.32 35.69c-2.69-1.95-8.34-3.25-12.1-3.25h0A22.55 22.55 0 006.67 55h29.9" />
      <circle cx={45.38} cy={46.92} r={11.94} />
      <path d="M45.98 39.8L45.98 53.8" />
      <path d="M38.98 46.8L52.98 46.8" />
    </svg>
  )
}

export function DropdownArrow(props) {
  return (
    <svg
      viewBox="0 0 24.00 24.00"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.707 14.707a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L12 12.586l4.293-4.293a1 1 0 111.414 1.414l-5 5z"
        fill="#878282"
      />
    </svg>
  )
}