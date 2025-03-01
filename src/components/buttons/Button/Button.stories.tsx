import { Button } from '@/components/buttons/Button/Button'

export default {
  title: 'Button'
}

export const SimpleButton = () => <Button title={'button'} onClick={() => {}} />
export const DisabledButton = () => <Button title={'button'} onClick={() => {}} disabled={true} />
export const ActiveButton = () => <Button title={'button'} onClick={() => {}} active={true} />
