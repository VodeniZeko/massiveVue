<template>
  <main class="px-8 h-100vh ">
    <HeroPage />
    <MiddleNav />
    <Teaser :items="teaserItems" />
  </main>
</template>

<script>
import HeroPage from '../components/HeroPage.vue'
import MiddleNav from '../components/MiddleNav.vue';
import Teaser from "../components/Teaser.vue";

const teaserItems = [
  {
    id: 1,
    image: {
      alt: `female-doctor.`,
      src: `https://media.istockphoto.com/photos/female-senior-doctor-hospital-medical-clinic-medicine-health-care-picture-id1179612492`
    },
    text: `It is administered by the federal goverment. The plan has two parts. A and B. Part A is referred to as hospital insurance and covers care at hospital(inpatient) and skilled nursing facilities as we as hospice care and some home health care. Part B is medical insurance and covers doctors' services(at their offices and hospitals), preventive care, and medical supplies.
    `,
    title: `Medicare Part A`
  },
  {
    id: 2,
    image: {
      alt: `female-nurse.`,
      src: `https://media.istockphoto.com/photos/caregiver-measuring-blood-pressure-of-senior-woman-at-home-picture-id1011191164`
    },
    text: `Recipients of Traditional Medicare can purchase Medicare supplements(also known as Medigap) from private companies. It is Used for health care costs not covered by Traditional Medicare(copayments,deductibles,etc.) Supplements correspond with different levels of coverage and work with your original Part A and Part B benefits. You will pay nad additional monthly premium for Medigap. (at their offices and hospitals), preventive care, and medical supplies`,
    title: `Medicare Supplements`
  },
  {
    id: 3,
    image: {
      alt: `prescription-pills.`,
      src: 'https://media.istockphoto.com/photos/doctor-filling-out-a-prescription-picture-id1190193669'
    },
    text: `It is administered by the federal government. The plan has two parts. A and B. Part A is reffered to as hospital insurance and covers care at hospitals(inpatient) and skilled nursing facilities as well as hospice care and some home health care. Plan B is medical insurance and covers doctors' services (at their offices and hospitals), preventive care, and medical supplies`,
    title: `Prescription Plans`
  }
];

export default {
  name: 'HomeView',
  components: {
    HeroPage,
    MiddleNav,
    Teaser
  },
    created() {
    this.teaserItems = teaserItems;
  }
  
};

</script>

