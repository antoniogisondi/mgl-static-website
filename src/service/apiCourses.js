import API from "./api";

export const getCourses = async () => {
    const res = await API.get('/courses')
    return res.data
}

export const getCoursesById = async (id) => {
    const res = await API.get(`/courses/${id}`)
    return res.data
}

export const getProfessionalCourses = async () => {
    const res = await API.get('/professional-courses')
    return res.data
}

export const getProfessionalCoursesById = async (id) => {
    const res = await API.get(`/professional-courses/${id}`)
    return res.data
}