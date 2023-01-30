<template>
  <div class="sidebar-container">
    <div class="sidebar-header">
      <img src="@/assets/src/Icons/left-icon.svg" alt="" />
    </div>
    <div class="sidebar-content">
      <ul>
        <router-link class="sidebar-li" @click.native="isDropdownActive = false" tag="li" :to="sidebar_svg[0].path">
          <svg
            class="dashboard-sidebar-svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentcolor"
            xmlns="http://www.w3.org/2000/svg"
            v-html="sidebar_svg[0].svg"
          ></svg>
          <span>{{ sidebar_svg[0].name }}</span>
        </router-link>

        <li
          :class="isDropdownActive ? 'active-dropdown-open' : 'active-dropdown-close'"
          class="sidebar-dropdown-li"
        >
          <div
            @click="isDropdownActive = !isDropdownActive"
            class="sidebar-dropdown-btn"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentcolor"
              xmlns="http://www.w3.org/2000/svg"
              class="sidebar-svg"
              v-html="sidebar_svg[1].svg"
            ></svg>
            <span>{{sidebar_svg[1].name}}</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentcolor"
              xmlns="http://www.w3.org/2000/svg"
              class="sidebar-dropdown-svg"
              v-html="sidebar_svg[2].svg"
            ></svg>
          </div>
          <div class="sidebar-dropdown-list">
            <router-link tag="li" :to="sidebar_svg[3].path">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentcolor"
                xmlns="http://www.w3.org/2000/svg"
                v-html="sidebar_svg[3].svg"
              ></svg>
              <span>{{ sidebar_svg[3].name }}</span>
            </router-link>

            <router-link tag="li" :to="sidebar_svg[4].path">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentcolor"
                xmlns="http://www.w3.org/2000/svg"
                v-html="sidebar_svg[4].svg"
              ></svg>
              <span>{{ sidebar_svg[4].name }}</span>
            </router-link>
          </div>
        </li>

        <router-link class="sidebar-li" tag="li" @click.native="isDropdownActive = false" :to="sidebar_svg[5].path">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentcolor"
            xmlns="http://www.w3.org/2000/svg"
            v-html="sidebar_svg[5].svg"
          ></svg>
          <span>{{ sidebar_svg[5].name }}</span>
        </router-link>

        <router-link class="sidebar-li" tag="li" @click.native="isDropdownActive = false" :to="sidebar_svg[6].path">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentcolor"
            xmlns="http://www.w3.org/2000/svg"
            v-html="sidebar_svg[6].svg"
          ></svg>
          <span>{{ sidebar_svg[6].name }}</span>
        </router-link>

        <router-link class="sidebar-li" tag="li" @click.native="isDropdownActive = false" :to="sidebar_svg[7].path">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentcolor"
            xmlns="http://www.w3.org/2000/svg"
            v-html="sidebar_svg[7].svg"
          ></svg>
          <span>{{ sidebar_svg[7].name }}</span>
        </router-link>

        <router-link class="sidebar-li" tag="li" @click.native="isDropdownActive = false" :to="sidebar_svg[8].path">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentcolor"
            xmlns="http://www.w3.org/2000/svg"
            v-html="sidebar_svg[8].svg"
          ></svg>
          <span>{{ sidebar_svg[8].name }}</span>
        </router-link>
      </ul>
    </div>
    <div class="sidebar-footer">
      <img class="sidebar-footer-img" src="@/assets/src/Group1.png" alt="" />
      <div class="sidebar-inner-footer">
        <span>Разработка сайта:</span>
        <img src="@/assets/src/DAC site logo 1.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "sidebar-app",
  data() {
    return {
      isDropdownActive: false,
      sidebar_svg: [
        {
          name: "Панель графиков",
          path: "/dashboard",
          svg: `<path d="M12 20.25C12 20.4489 12.079 20.6397 12.2197 20.7803C12.3603 20.921 12.5511 21 12.75 21H14.25C14.4489 21 14.6397 20.921 14.7803 20.7803C14.921 20.6397 15 20.4489 15 20.25V11.25C15 11.0511 14.921 10.8603 14.7803 10.7197C14.6397 10.579 14.4489 10.5 14.25 10.5H12.75C12.5511 10.5 12.3603 10.579 12.2197 10.7197C12.079 10.8603 12 11.0511 12 11.25V20.25ZM8.25 21C8.05109 21 7.86032 20.921 7.71967 20.7803C7.57902 20.6397 7.5 20.4489 7.5 20.25V14.25C7.5 14.0511 7.57902 13.8603 7.71967 13.7197C7.86032 13.579 8.05109 13.5 8.25 13.5H9.75C9.94891 13.5 10.1397 13.579 10.2803 13.7197C10.421 13.8603 10.5 14.0511 10.5 14.25V20.25C10.5 20.4489 10.421 20.6397 10.2803 20.7803C10.1397 20.921 9.94891 21 9.75 21H8.25ZM3.75 21C3.55109 21 3.36032 20.921 3.21967 20.7803C3.07902 20.6397 3 20.4489 3 20.25V17.25C3 17.0511 3.07902 16.8603 3.21967 16.7197C3.36032 16.579 3.55109 16.5 3.75 16.5H5.25C5.44891 16.5 5.63968 16.579 5.78033 16.7197C5.92098 16.8603 6 17.0511 6 17.25V20.25C6 20.4489 5.92098 20.6397 5.78033 20.7803C5.63968 20.921 5.44891 21 5.25 21H3.75Z" fill="currentcolor"/>
                        <path d="M18 21V6.75L11.25 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.31607 1.44129 0 2.20435 0 3V21C0 21.7956 0.31607 22.5587 0.87868 23.1213C1.44129 23.6839 2.20435 24 3 24H15C15.7956 24 16.5587 23.6839 17.1213 23.1213C17.6839 22.5587 18 21.7956 18 21ZM11.25 4.5C11.25 5.09674 11.4871 5.66903 11.909 6.09099C12.331 6.51295 12.9033 6.75 13.5 6.75H16.5V21C16.5 21.3978 16.342 21.7794 16.0607 22.0607C15.7794 22.342 15.3978 22.5 15 22.5H3C2.60218 22.5 2.22064 22.342 1.93934 22.0607C1.65804 21.7794 1.5 21.3978 1.5 21V3C1.5 2.60218 1.65804 2.22064 1.93934 1.93934C2.22064 1.65804 2.60218 1.5 3 1.5H11.25V4.5Z" fill="currentcolor"/>`,
        },
        {
          name: "Заявки",
          path: "заявки",
          svg: `<path d="M15.6 16H11.4C11.0288 15.9997 10.6729 15.8679 10.4105 15.6335C10.148 15.3992 10.0004 15.0814 10 14.75V12.25C10.0004 11.9186 10.148 11.6008 10.4105 11.3665C10.6729 11.1321 11.0288 11.0003 11.4 11H15.6C15.9712 11.0003 16.3271 11.1321 16.5895 11.3665C16.852 11.6008 16.9996 11.9186 17 12.25V14.75C16.9996 15.0814 16.852 15.3992 16.5895 15.6335C16.3271 15.8679 15.9712 15.9997 15.6 16ZM11.4 12.25V14.75H15.6V12.25H11.4Z" fill="currentcolor"/>
                    <path d="M8.5 13H7V9.42857C7.0004 9.04981 7.15856 8.68666 7.43978 8.41884C7.721 8.15101 8.1023 8.00038 8.5 8H13V9.42857H8.5V13Z" fill="currentcolor"/>
                    <path d="M12 22C11.8774 22.0001 11.757 21.9688 11.6511 21.9093L3.34338 17.2427C3.23886 17.184 3.15215 17.0999 3.0919 16.9988C3.03165 16.8978 2.99996 16.7833 3 16.6667V7.33348C2.99996 7.21694 3.03165 7.10244 3.0919 7.00137C3.15215 6.90031 3.23886 6.81622 3.34338 6.75748L11.6511 2.09086C11.757 2.03136 11.8774 2 12 2C12.1226 2 12.243 2.03136 12.3489 2.09086L20.6566 6.75748L19.9588 7.90947L12 3.43885L4.38462 7.71614V16.2841L12 20.562L19.6154 16.2841V11.3334H21V16.6667C21 16.7833 20.9683 16.8978 20.9081 16.9988C20.8478 17.0999 20.7611 17.184 20.6566 17.2427L12.3489 21.9093C12.243 21.9688 12.1226 22.0001 12 22Z" fill="currentcolor"/>`,
        },
        {
          name: "Заявки",
          path: "заявки",
          svg: `<path d="M3.29289 7.29289C3.68342 6.90237 4.31658 6.90237 4.70711 7.29289L12 14.5858L19.2929 7.29289C19.6834 6.90237 20.3166 6.90237 20.7071 7.29289C21.0976 7.68342 21.0976 8.31658 20.7071 8.70711L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L3.29289 8.70711C2.90237 8.31658 2.90237 7.68342 3.29289 7.29289Z" fill="currentcolor"/>`,
        },
        {
          name: "Открытые заявки",
          path: "/opened-requests",
          svg: `<path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z" fill="currentcolor"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 5C12.5523 5 13 5.44772 13 6V11.5546V11.5546C13.0001 11.8481 13.0887 12.0898 13.1941 12.2321L14.8036 14.4048C15.1323 14.8486 15.039 15.4748 14.5952 15.8036C14.1514 16.1323 13.5252 16.039 13.1964 15.5952L11.5872 13.4227V13.4227C11.1925 12.8901 11.0001 12.2161 11 11.555V6C11 5.44772 11.4477 5 12 5Z" fill="currentcolor"/>`,
        },
        {
          name: "Закрытые заявки",
          path: "/closed-requests",
          svg: `<path fill-rule="evenodd" clip-rule="evenodd" d="M19.7071 2.29289C20.0976 2.68342 20.0976 3.31658 19.7071 3.70711L9.20711 14.2071C8.81658 14.5976 8.18342 14.5976 7.79289 14.2071L3.29289 9.70711C2.90237 9.31658 2.90237 8.68342 3.29289 8.29289C3.68342 7.90237 4.31658 7.90237 4.70711 8.29289L8.5 12.0858L18.2929 2.29289C18.6834 1.90237 19.3166 1.90237 19.7071 2.29289ZM2 21C2 20.4477 2.44772 20 3 20H21C21.5523 20 22 20.4477 22 21C22 21.5523 21.5523 22 21 22H3C2.44772 22 2 21.5523 2 21Z" fill="currentcolor"/>`,
        },
        {
          name: "Статистика",
          path: "/statistics",
          svg: `<path d="M16 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V16C0 16.5304 0.210714 17.0391 0.585786 17.4142C0.960859 17.7893 1.46957 18 2 18H16C16.5304 18 17.0391 17.7893 17.4142 17.4142C17.7893 17.0391 18 16.5304 18 16V2C18 1.46957 17.7893 0.960859 17.4142 0.585786C17.0391 0.210714 16.5304 0 16 0ZM16 16H2V2H16V16ZM6 14H4V9H6V14ZM10 14H8V4H10V14ZM14 14H12V7H14V14Z" fill="currentcolor"/>`,
        },
        {
          name: "Жалобы и предложения",
          path: "/sentenses",
          svg: `<path d="M11.986 2C11.9245 1.44999 11.6625 0.941936 11.25 0.572972C10.8375 0.204007 10.3034 1.67206e-05 9.75 0H6.25C5.69656 1.67206e-05 5.16255 0.204007 4.75004 0.572972C4.33754 0.941936 4.07549 1.44999 4.014 2H2.25C1.65326 2 1.08097 2.23705 0.65901 2.65901C0.237053 3.08097 0 3.65326 0 4.25V17.75C0 18.3467 0.237053 18.919 0.65901 19.341C1.08097 19.7629 1.65326 20 2.25 20H4.5C4.17473 19.5676 3.9992 19.0411 4 18.5H2.25C2.05109 18.5 1.86032 18.421 1.71967 18.2803C1.57902 18.1397 1.5 17.9489 1.5 17.75V4.25C1.5 4.05109 1.57902 3.86032 1.71967 3.71967C1.86032 3.57902 2.05109 3.5 2.25 3.5H4.379C4.783 4.103 5.47 4.5 6.25 4.5H9.75C10.53 4.5 11.217 4.103 11.621 3.5H13.75C13.9489 3.5 14.1397 3.57902 14.2803 3.71967C14.421 3.86032 14.5 4.05109 14.5 4.25V17C14.8669 16.5105 15.4006 16.1725 16 16.05V4.25C16 3.95453 15.9418 3.66194 15.8287 3.38896C15.7157 3.11598 15.5499 2.86794 15.341 2.65901C15.1321 2.45008 14.884 2.28434 14.611 2.17127C14.3381 2.0582 14.0455 2 13.75 2H11.986ZM11.995 2.096L12 2.25C12 2.198 11.998 2.147 11.995 2.096V2.096ZM6.25 1.5H9.75C9.94891 1.5 10.1397 1.57902 10.2803 1.71967C10.421 1.86032 10.5 2.05109 10.5 2.25C10.5 2.44891 10.421 2.63968 10.2803 2.78033C10.1397 2.92098 9.94891 3 9.75 3H6.25C6.05109 3 5.86032 2.92098 5.71967 2.78033C5.57902 2.63968 5.5 2.44891 5.5 2.25C5.5 2.05109 5.57902 1.86032 5.71967 1.71967C5.86032 1.57902 6.05109 1.5 6.25 1.5ZM8 18.5C8 18.8978 7.84196 19.2794 7.56066 19.5607C7.27936 19.842 6.89782 20 6.5 20C6.10218 20 5.72064 19.842 5.43934 19.5607C5.15804 19.2794 5 18.8978 5 18.5C5 18.1022 5.15804 17.7206 5.43934 17.4393C5.72064 17.158 6.10218 17 6.5 17C6.89782 17 7.27936 17.158 7.56066 17.4393C7.84196 17.7206 8 18.1022 8 18.5ZM11.5 20C11.8978 20 12.2794 19.842 12.5607 19.5607C12.842 19.2794 13 18.8978 13 18.5C13 18.1022 12.842 17.7206 12.5607 17.4393C12.2794 17.158 11.8978 17 11.5 17C11.1022 17 10.7206 17.158 10.4393 17.4393C10.158 17.7206 10 18.1022 10 18.5C10 18.8978 10.158 19.2794 10.4393 19.5607C10.7206 19.842 11.1022 20 11.5 20V20ZM16.5 20C16.8978 20 17.2794 19.842 17.5607 19.5607C17.842 19.2794 18 18.8978 18 18.5C18 18.1022 17.842 17.7206 17.5607 17.4393C17.2794 17.158 16.8978 17 16.5 17C16.1022 17 15.7206 17.158 15.4393 17.4393C15.158 17.7206 15 18.1022 15 18.5C15 18.8978 15.158 19.2794 15.4393 19.5607C15.7206 19.842 16.1022 20 16.5 20Z" fill="currentcolor"/>`,
        },
        {
          name: "Настройки",
          path: "/settings",
          svg: `<path d="M12.9706 21.5H9.03112C8.78428 21.5 8.54485 21.4182 8.35253 21.2681C8.16021 21.118 8.02655 20.9086 7.97373 20.6747L7.53324 18.6965C6.94562 18.4467 6.38844 18.1343 5.87193 17.7652L3.88378 18.3794C3.64845 18.4522 3.39453 18.4447 3.16419 18.3582C2.93385 18.2717 2.74094 18.1113 2.61751 17.9037L0.643425 14.5952C0.521285 14.3874 0.475436 14.1456 0.513381 13.9093C0.551325 13.673 0.670817 13.4561 0.852306 13.2942L2.39456 11.9292C2.32442 11.3109 2.32442 10.687 2.39456 10.0686L0.852306 8.7068C0.67056 8.54486 0.550906 8.32783 0.512955 8.09127C0.475004 7.85472 0.521008 7.61267 0.643425 7.4048L2.61318 4.09415C2.73662 3.88658 2.92952 3.72622 3.15986 3.6397C3.39021 3.55317 3.64412 3.54569 3.87945 3.6185L5.8676 4.23275C6.13168 4.04375 6.40658 3.86735 6.69014 3.70775C6.96396 3.55865 7.24535 3.4232 7.53324 3.30245L7.97481 1.32635C8.02738 1.09241 8.16078 0.882922 8.3529 0.732626C8.54502 0.58233 8.78432 0.500252 9.03112 0.5H12.9706C13.2174 0.500252 13.4567 0.58233 13.6488 0.732626C13.841 0.882922 13.9744 1.09241 14.0269 1.32635L14.4728 3.3035C15.0601 3.55329 15.6169 3.86566 16.1331 4.23485L18.1223 3.6206C18.3575 3.54806 18.6111 3.55568 18.8413 3.64219C19.0714 3.7287 19.2641 3.88891 19.3875 4.09625L21.3572 7.4069C21.6083 7.83425 21.5217 8.375 21.1484 8.70785L19.6061 10.0728C19.6762 10.6912 19.6762 11.3151 19.6061 11.9334L21.1484 13.2984C21.5217 13.6323 21.6083 14.172 21.3572 14.5994L19.3875 17.91C19.264 18.1176 19.0711 18.278 18.8408 18.3645C18.6105 18.451 18.3565 18.4585 18.1212 18.3857L16.1331 17.7714C15.617 18.1404 15.0601 18.4524 14.4728 18.7017L14.0269 20.6747C13.9742 20.9084 13.8407 21.1177 13.6486 21.2678C13.4565 21.4179 13.2173 21.4998 12.9706 21.5ZM6.26047 15.4404L7.14794 16.0704C7.34817 16.2132 7.55597 16.3445 7.77242 16.4642C7.97589 16.5787 8.18369 16.6815 8.39906 16.775L9.40884 17.2045L9.90344 19.4H12.1005L12.5951 17.2034L13.6048 16.774C14.0453 16.585 14.4642 16.3508 14.8527 16.0746L15.7402 15.4446L17.9502 16.1271L19.0487 14.2812L17.3355 12.7661L17.4567 11.7035C17.5108 11.2383 17.5108 10.769 17.4567 10.3049L17.3355 9.2423L19.0498 7.724L17.9502 5.87705L15.7413 6.55955L14.8527 5.92955C14.464 5.65203 14.0456 5.41582 13.6048 5.225L12.5951 4.79555L12.1005 2.6H9.90344L9.40559 4.7966L8.39906 5.225C7.95769 5.41254 7.53917 5.64708 7.15119 5.9243L6.26264 6.5543L4.05478 5.8718L2.9541 7.724L4.66735 9.23705L4.54614 10.3007C4.49202 10.7658 4.49202 11.2352 4.54614 11.6993L4.66735 12.7619L2.9541 14.2771L4.05262 16.1229L6.26047 15.4404ZM10.9965 15.2C9.84839 15.2 8.74725 14.7575 7.93539 13.9698C7.12352 13.1822 6.66741 12.1139 6.66741 11C6.66741 9.88609 7.12352 8.8178 7.93539 8.03015C8.74725 7.2425 9.84839 6.8 10.9965 6.8C12.1447 6.8 13.2458 7.2425 14.0577 8.03015C14.8696 8.8178 15.3257 9.88609 15.3257 11C15.3257 12.1139 14.8696 13.1822 14.0577 13.9698C13.2458 14.7575 12.1447 15.2 10.9965 15.2ZM10.9965 8.9C10.5727 8.90042 10.1583 9.02156 9.80471 9.2484C9.45117 9.47524 9.17405 9.7978 9.00774 10.176C8.84143 10.5543 8.79325 10.9716 8.86918 11.3762C8.94511 11.7807 9.1418 12.1548 9.43486 12.4519C9.72791 12.749 10.1044 12.9561 10.5177 13.0475C10.931 13.1389 11.3628 13.1105 11.7596 12.966C12.1564 12.8214 12.5008 12.567 12.7499 12.2343C12.9991 11.9016 13.142 11.5053 13.1611 11.0945V11.5145V11C13.1611 10.443 12.9331 9.9089 12.5271 9.51508C12.1212 9.12125 11.5706 8.9 10.9965 8.9Z" fill="currentcolor"/>`,
        },
        {
          name: "Мой профиль",
          path: "/my-profile",
          svg: `<path fill-rule="evenodd" clip-rule="evenodd" d="M15 8C15 9.06087 14.5786 10.0783 13.8284 10.8284C13.0783 11.5786 12.0609 12 11 12C9.93913 12 8.92172 11.5786 8.17157 10.8284C7.42143 10.0783 7 9.06087 7 8C7 6.93913 7.42143 5.92172 8.17157 5.17157C8.92172 4.42143 9.93913 4 11 4C12.0609 4 13.0783 4.42143 13.8284 5.17157C14.5786 5.92172 15 6.93913 15 8V8ZM13 8C13 8.53043 12.7893 9.03914 12.4142 9.41421C12.0391 9.78929 11.5304 10 11 10C10.4696 10 9.96086 9.78929 9.58579 9.41421C9.21071 9.03914 9 8.53043 9 8C9 7.46957 9.21071 6.96086 9.58579 6.58579C9.96086 6.21071 10.4696 6 11 6C11.5304 6 12.0391 6.21071 12.4142 6.58579C12.7893 6.96086 13 7.46957 13 8V8Z" fill="currentcolor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11 0C4.925 0 0 4.925 0 11C0 17.075 4.925 22 11 22C17.075 22 22 17.075 22 11C22 4.925 17.075 0 11 0ZM2 11C2 13.09 2.713 15.014 3.908 16.542C4.74723 15.4399 5.8299 14.5467 7.07143 13.9323C8.31297 13.3179 9.67974 12.9988 11.065 13C12.4323 12.9987 13.7819 13.3095 15.0109 13.9088C16.2399 14.508 17.316 15.3799 18.157 16.458C19.0234 15.3216 19.6068 13.9952 19.8589 12.5886C20.111 11.182 20.0244 9.73553 19.6065 8.36898C19.1886 7.00243 18.4512 5.75505 17.4555 4.73004C16.4598 3.70503 15.2343 2.93186 13.8804 2.47451C12.5265 2.01716 11.0832 1.88877 9.66986 2.09997C8.25652 2.31117 6.91379 2.85589 5.75277 3.68905C4.59175 4.52222 3.64581 5.61987 2.99323 6.8912C2.34065 8.16252 2.00018 9.57097 2 11V11ZM11 20C8.93395 20.0031 6.93027 19.2923 5.328 17.988C5.97293 17.0647 6.83134 16.3109 7.83019 15.7907C8.82905 15.2705 9.93879 14.9992 11.065 15C12.1772 14.9991 13.2735 15.2636 14.2629 15.7714C15.2524 16.2793 16.1064 17.0159 16.754 17.92C15.1393 19.2667 13.1026 20.0029 11 20V20Z" fill="currentcolor"/>`,
        },
      ],
    };
  },
  methods: {
    // dropdownActive() {
    //   this.isDropdownActive = !this.isDropdownActive;
    // },
    dropdownSave() {
      this.isDropdownActive = true;
      console.log(this.isDropdownActive);
    },
  },
};
</script>
<style>

.sidebar-content ul{
    display: flex;
    flex-direction: column;
    position: relative;
    width: 75%;
}

.sidebar-content ul li:hover{
    color: #1C9E3C;
}
.sidebar-content ul .sidebar-li{
    display: flex;
    flex: 0 0 auto;
    width: 100%;
    height: 50px;
    margin-top: 25px;
    cursor: pointer;
    align-items: center;
}
.sidebar-content ul .sidebar-li svg{
  display: block;
  margin-left: 25px;
}
.sidebar-content ul .sidebar-dropdown-li{
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    min-height: 25px;
    margin-top: 25px;
    height: auto;
}
.sidebar-content ul .sidebar-dropdown-li .sidebar-dropdown-btn{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    cursor: pointer;
}
.sidebar-content ul .sidebar-dropdown-li .sidebar-dropdown-list{
    display: none;
}
.sidebar-content ul .active-dropdown-open .sidebar-dropdown-list{
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 10px;
    opacity: 1;
}
.sidebar-content ul .active-dropdown-open .sidebar-dropdown-list li{
  height: 50px;
  align-items: center;
}
.sidebar-content ul .active-dropdown-open .sidebar-dropdown-list li svg{
  display: block;
  margin-left: 25px;
}
.sidebar-content ul .sidebar-dropdown-li .sidebar-dropdown-btn .sidebar-svg{
  display: block;
  margin-left: 25px;
}
.sidebar-content ul .active-dropdown-open .sidebar-dropdown-list svg{
  display: block;
}
.sidebar-content ul .active-dropdown-open .sidebar-dropdown-list li{
    list-style: none;
    display: flex;
    margin-top: 15px;
    margin-left: 15px;
    cursor: pointer;
}
.sidebar-content ul li .dashboard-sidebar-svg{
  display: block;
}
.sidebar-content ul li span{
  display: block;
  margin-left: 10px;
}
.sidebar-content ul .sidebar-dropdown-li .sidebar-dropdown-btn .sidebar-dropdown-svg{
  display: block;
  margin-left: 10px;
}
.sidebar-content ul .active-dropdown-open .sidebar-dropdown-btn .sidebar-dropdown-svg{
  transform: rotate(180deg);
  transition: transform .5s;
}
.sidebar-content ul .active-dropdown-close .sidebar-dropdown-btn .sidebar-dropdown-svg{
  transition: transform .5s;
}
.sidebar-content ul .router-link-active{
  width: 296px; 
  background: #1C9E3C;
  color: #FFFFFF;
  border-radius: 0 30px 30px 0;
}
.sidebar-content ul .router-link-active:hover{
  color: #FFFFFF;
}
.sidebar-content ul .active-dropdown-open{
  display: block;
  width: 296px;
  background: #1C9E3C;
  border-radius: 0 30px 30px 0;
  color: #FFFFFF;
  padding: 10px 0 10px 0;
}
.sidebar-content ul .active-dropdown-open:hover{
  color: #FFFFFF;
}
.sidebar-content ul .active-dropdown-open li:hover{
  color: #FFFFFF;
}
.sidebar-content ul .active-dropdown-open .router-link-active{
  width: auto;
}
.sidebar-content ul .active-dropdown-open .router-link-active::after{
  position: fixed;
  left: 20px;
  height: 48px;
  background: hsla(0,0%,100%,.2);
  border-radius: 20px;
}
/* .sidebar-content ul li.active-dropdown-close .sidebar-dropdown-list {
  display: none;
} */

</style>
