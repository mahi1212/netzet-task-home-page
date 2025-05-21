import { NotificationBarProps } from '@/types/natification-bar'

const NotificationBar: React.FC<NotificationBarProps> = ({ title, description }) => {
  return (
    <div className="w-full p-4 md:px-0 md:py-2 text-center md:text-[22px] text-[16px] bg-gradient-to-r from-[#FC004E] to-[#10CBE0] font-figtree " >
      <span className="text-[#00E7F9]">{title}</span>
      <span className="text-white ms-2">{description}</span>
    </div>
  )
}

export default NotificationBar