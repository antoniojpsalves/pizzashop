import { api } from '@/lib/axios'

interface UpdateProfileBody {
  name: string
  description: null | string
}

export async function updateProfile({ name, description }: UpdateProfileBody) {
  await api.put('/profile', { name, description })
}
