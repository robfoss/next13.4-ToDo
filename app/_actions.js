'use server';

import { createTodo } from '../lib/mongo/todos.js';
import { revalidatePath } from 'next/cache';

export async function create(formData) {
  const title = formData.get('title');
  if (!title) throw new Error('Title is required');
  await createTodo(title);
  return revalidatePath('/todos');
}
