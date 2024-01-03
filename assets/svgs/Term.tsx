import { View, Text } from 'react-native'
import React from 'react'
import { Svg  ,Path} from 'react-native-svg'

const Term = ({stroke}) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M17.1162 19.209C17.2078 19.2091 17.2986 19.1911 17.3832 19.1561C17.4679 19.121 17.5448 19.0695 17.6095 19.0046L19.4699 17.1442C19.6 17.0132 19.6728 16.836 19.6725 16.6514C19.6721 16.4668 19.5987 16.2899 19.4681 16.1594C19.3376 16.0289 19.1607 15.9554 18.9761 15.9551C18.7916 15.9547 18.6144 16.0276 18.4834 16.1576L17.1162 17.5248L16.6792 17.0878C16.6146 17.0227 16.5376 16.9709 16.4529 16.9356C16.3682 16.9002 16.2773 16.8819 16.1854 16.8817C16.0936 16.8816 16.0027 16.8995 15.9178 16.9346C15.8329 16.9696 15.7558 17.0211 15.6909 17.086C15.626 17.151 15.5745 17.2281 15.5394 17.3129C15.5044 17.3978 15.4864 17.4888 15.4866 17.5806C15.4867 17.6724 15.505 17.7633 15.5404 17.848C15.5758 17.9328 15.6275 18.0097 15.6927 18.0744L16.6229 19.0046C16.6876 19.0695 16.7645 19.121 16.8492 19.1561C16.9338 19.1911 17.0246 19.2091 17.1162 19.209Z" fill={stroke}/>
    <Path d="M14.3256 5.7207H5.95353C5.7685 5.7207 5.59104 5.79421 5.4602 5.92505C5.32936 6.05589 5.25586 6.23334 5.25586 6.41838C5.25586 6.60341 5.32936 6.78087 5.4602 6.91171C5.59104 7.04255 5.7685 7.11605 5.95353 7.11605H14.3256C14.5107 7.11605 14.6881 7.04255 14.819 6.91171C14.9498 6.78087 15.0233 6.60341 15.0233 6.41838C15.0233 6.23334 14.9498 6.05589 14.819 5.92505C14.6881 5.79421 14.5107 5.7207 14.3256 5.7207Z" fill={stroke}/>
    <Path d="M15.0233 10.1391C15.0233 9.95406 14.9497 9.77663 14.8189 9.6458C14.6881 9.51498 14.5106 9.44146 14.3256 9.44141H5.95353C5.7685 9.44141 5.59104 9.51491 5.4602 9.64575C5.32936 9.77659 5.25586 9.95405 5.25586 10.1391C5.25586 10.3241 5.32936 10.5016 5.4602 10.6324C5.59104 10.7632 5.7685 10.8368 5.95353 10.8368H14.3256C14.5106 10.8367 14.6881 10.7632 14.8189 10.6324C14.9497 10.5015 15.0233 10.3241 15.0233 10.1391Z" fill={stroke}/>
    <Path d="M12.6977 13.8608C12.6977 13.6757 12.6242 13.4983 12.4933 13.3675C12.3625 13.2367 12.1851 13.1631 12 13.1631H5.95353C5.7685 13.1631 5.59104 13.2366 5.4602 13.3674C5.32936 13.4983 5.25586 13.6757 5.25586 13.8608C5.25586 14.0458 5.32936 14.2233 5.4602 14.3541C5.59104 14.4849 5.7685 14.5584 5.95353 14.5584H12C12.1851 14.5584 12.3625 14.4849 12.4933 14.354C12.6242 14.2232 12.6977 14.0458 12.6977 13.8608Z" fill={stroke}/>
    <Path d="M5.95353 16.8838C5.7685 16.8838 5.59104 16.9573 5.4602 17.0881C5.32936 17.219 5.25586 17.3964 5.25586 17.5815C5.25586 17.7665 5.32936 17.944 5.4602 18.0748C5.59104 18.2056 5.7685 18.2791 5.95353 18.2791H11.0698C11.2548 18.2791 11.4323 18.2056 11.5631 18.0748C11.694 17.944 11.7675 17.7665 11.7675 17.5815C11.7675 17.3964 11.694 17.219 11.5631 17.0881C11.4323 16.9573 11.2548 16.8838 11.0698 16.8838H5.95353Z" fill={stroke}/>
    <Path d="M17.5814 13.1628C16.8058 13.163 16.0439 13.3673 15.3722 13.7552C14.7006 14.1431 14.1428 14.7009 13.755 15.3725C13.3672 16.0442 13.1629 16.8061 13.1628 17.5817C13.1626 18.3573 13.3666 19.1193 13.7542 19.7912C13.8468 19.9514 13.9993 20.0682 14.1781 20.116C14.3569 20.1638 14.5474 20.1386 14.7076 20.046C14.8678 19.9533 14.9847 19.8008 15.0324 19.622C15.0802 19.4432 15.055 19.2528 14.9624 19.0926C14.6297 18.5161 14.4965 17.846 14.5834 17.1861C14.6703 16.5263 14.9725 15.9135 15.4432 15.4429C15.9139 14.9723 16.5266 14.6702 17.1865 14.5833C17.8464 14.4965 18.5165 14.6298 19.0929 14.9626C19.6693 15.2953 20.1198 15.809 20.3745 16.4239C20.6292 17.0388 20.6739 17.7206 20.5017 18.3635C20.3294 19.0064 19.9499 19.5745 19.4219 19.9797C18.8939 20.3849 18.247 20.6046 17.5814 20.6047H3.62791C3.56645 20.6039 3.50772 20.5792 3.46426 20.5357C3.42081 20.4923 3.39607 20.4335 3.39535 20.3721V3.62791C3.39607 3.56645 3.42081 3.50772 3.46426 3.46426C3.50772 3.42081 3.56645 3.39607 3.62791 3.39535H16.6512C16.7126 3.39607 16.7713 3.42081 16.8148 3.46426C16.8583 3.50772 16.883 3.56645 16.8837 3.62791V12C16.8837 12.185 16.9572 12.3625 17.0881 12.4933C17.2189 12.6242 17.3964 12.6977 17.5814 12.6977C17.7664 12.6977 17.9439 12.6242 18.0747 12.4933C18.2056 12.3625 18.2791 12.185 18.2791 12V3.62791C18.2785 3.19632 18.1069 2.78256 17.8017 2.47738C17.4965 2.1722 17.0828 2.00052 16.6512 2H3.62791C3.19632 2.00052 2.78256 2.1722 2.47738 2.47738C2.1722 2.78256 2.00052 3.19632 2 3.62791V20.3721C2.00052 20.8037 2.1722 21.2174 2.47738 21.5226C2.78256 21.8278 3.19632 21.9995 3.62791 22H17.5814C18.7533 22 19.8772 21.5345 20.7058 20.7058C21.5345 19.8772 22 18.7533 22 17.5814C22 16.4095 21.5345 15.2856 20.7058 14.457C19.8772 13.6283 18.7533 13.1628 17.5814 13.1628Z" fill={stroke}/>
    </Svg>
    
  )
}

export default Term