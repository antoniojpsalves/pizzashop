import { api } from '@/lib/axios'

interface UpdateProfileBody {
  name: string
  description: null | string
}

export async function updateProfile({ name, description }: UpdateProfileBody) {
  // await new Promise((_, reject) => setTimeout(reject, 3000))
  await api.put('/profile', { name, description })
}
