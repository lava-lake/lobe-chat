import { ModelProviderCard } from '@/types/llm';

const Groq: ModelProviderCard = {
  chatModels: [
    {
      displayName: 'Mixtral-8x7b-Instruct-v0.1',
      enabled: true,
      id: 'mixtral-8x7b-32768',
      tokens: 32_768,
    },
    {
      displayName: 'Gemma-7b-it',
      enabled: true,
      id: 'gemma-7b-it',
      tokens: 8192,
    },
    {
      displayName: 'LLaMA2-70b-chat',
      enabled: true,
      id: 'llama2-70b-4096',
      tokens: 4096,
    },
  ],
  id: 'groq',
};

export default Groq;
