---
title: Book a Demo
layout: base.njk
---

<main class="container my-5 py-5">
    <div class="text-center mb-5 fade-in-up">
        <h1 class="display-4 fw-bold">Schedule a Live Demo</h1>
        <p class="text-white-50">See our solutions in action. Fill out the form below to get started.</p>
    </div>

    <div class="row justify-content-center fade-in-up">
        <div class="col-lg-7">
            <div class="glass-card p-4 p-md-5 glass-form">
                <form class="needs-validation" novalidate
                  action="https://formspree.io/f/mqalynoy"
                  method="POST"
                >
                    <div class="row">
                        <div class="col-md-6 mb-4">
                            <label for="firstName" class="form-label">First Name</label>
                            <input type="text" name="firstName" class="form-control" id="firstName" placeholder="John" required />
                            <div class="invalid-feedback">Please enter your first name.</div>
                        </div>
                        <div class="col-md-6 mb-4">
                            <label for="lastName" class="form-label">Last Name</label>
                            <input type="text" name="lastName" class="form-control" id="lastName" placeholder="Doe" required />
                            <div class="invalid-feedback">Please enter your last name.</div>
                        </div>
                    </div>
                    <div class="mb-4">
                        <label for="email" class="form-label">Work Email</label>
                        <input type="email" name="email" class="form-control" id="email" placeholder="name@company.com" required />
                        <div class="invalid-feedback">Please enter a valid email address.</div>
                    </div>
                    <div class="mb-4">
                        <label for="company" class="form-label">Company Name</label>
                        <input type="text" name="company" class="form-control" id="company" placeholder="Acme Corporation" required />
                        <div class="invalid-feedback">Please enter your company name.</div>
                    </div>
                    <div class="mb-4">
                        <label for="interest" class="form-label">I'm interested in...</label>
                        <select class="form-select" name="interest" id="interest" required>
                            <option selected disabled value="">Select a service</option>
                            <option value="Clean Development">Clean Development</option>
                            <option value="Glassmorphic UI Design">Glassmorphic UI Design</option>
                            <option value="Responsive Web Apps">Responsive Web Apps</option>
                        </select>
                        <div class="invalid-feedback">Please select a service.</div>
                    </div>
                    <button type="submit" class="btn btn-shiny w-100 mt-3">Request My Demo</button>
                </form>
            </div>
        </div>
    </div>
</main>