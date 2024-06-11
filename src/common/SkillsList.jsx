

export default function SkillsList({src,skill}) {
  return <span>
        <img src={src} alt='CheckMarkIcon'/>
        <p>{skill}</p>
    </span>
}
