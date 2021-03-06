export type MenuItem = {
  label: string
  href: string
  mobile: boolean
}

export type Job = {
  role: string
  company: string
  place?: string
  from: number
  to: number | string
  responsibilities: string[]
  skills: string[]
  type: string
}

export type Skill = {
  name: string
  years: number
}

export type Category = {
  name: string
  skills: Skill[]
  misc?: string[]
}
