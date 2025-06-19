import API from "./api";

export const getProfessionalCourses = async () => {
    const res = await API.get('/professional-courses')
    return res.data
}

export const getProfessionalCoursesById = async (id) => {
    const res = await API.get(`/professional-courses/${id}`)
    return res.data
}

export const sendContactRequest = async (data) => {
    const res = await API.post('/contact', data)
    return res.data
}