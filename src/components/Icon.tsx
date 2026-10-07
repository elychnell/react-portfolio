type IconProps = {
  type: 'email' | 'github' | 'linkedin'
}

function Icon({ type }: IconProps) {
  return (
     type === "email" ? (
    // Email icon
    <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M3 6.75 12 13l9-6.25M4.5 19h15A1.5 1.5 0 0 0 21 17.5v-11A1.5 1.5 0 0 0 19.5 5h-15A1.5 1.5 0 0 0 3 6.5v11A1.5 1.5 0 0 0 4.5 19Z"></path></svg>
    ) : type === "github" ? (
    // GitHub icon
    <svg aria-hidden="true" className="size-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .7a11.5 11.5 0 0 0-3.64 22.4c.58.1.79-.25.79-.56v-2.23c-3.22.7-3.9-1.37-3.9-1.37-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.74-1.55-2.57-.3-5.27-1.28-5.27-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.16 1.18a10.98 10.98 0 0 1 5.75 0c2.19-1.49 3.15-1.18 3.15-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.71 5.39-5.29 5.68.42.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z"></path></svg>
   ) : type === "linkedin" ? (
    // LinkedIn icon
    <svg aria-hidden="true" className="size-5" fill="currentColor" viewBox="0 0 24 24"><path d="M5.34 7.55H.9V21h4.44V7.55ZM3.12 1A2.57 2.57 0 1 0 3.1 6.14 2.57 2.57 0 0 0 3.12 1ZM21 13.29c0-4.05-2.16-5.94-5.05-5.94a4.37 4.37 0 0 0-3.96 2.18h-.06V7.55H7.67V21h4.44v-6.66c0-1.75.33-3.45 2.51-3.45 2.15 0 2.18 2.01 2.18 3.57V21h4.44l-.24-7.71Z"></path></svg>
) : null
  )
}

export default Icon
