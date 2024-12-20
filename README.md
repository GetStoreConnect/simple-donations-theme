# Simple Donation Theme 

The Simple Donation theme is specifically designed for nonprofit organizations looking to deliver an optimized user experience, perfect for quickly capturing donations or selling their products efficiently. With this theme, you can amplify your mission's impact by streamlining contributions and purchases.

<img width="1278" alt="nfp-theme-main-image" src="https://github.com/user-attachments/assets/c9a0625c-cdb6-4e7a-a156-c15314e0ecca">

## Out-of-the-Box Features and Custom Templates

The Simple Donation theme is packed with enhanced features and customizable templates to help you create compelling content for your nonprofit website. Whether you're a developer or not, this guide will help you get started.

### 1. Image with Overlay and Donation Box

Highlight impactful visuals by adding a donation box directly over images, making it easy for users to contribute.

### 2. Single Campaign Cards

<img width="1161" alt="simple-donation-card" src="https://github.com/user-attachments/assets/0200274b-eb17-4e3c-ab89-ddbed29cf3e3">

Showcase individual campaigns with dedicated cards. Link a product to the content block, and the template will handle the rest for you.

### 3. Variable Pricing Picker

Allow users to select their own donation amount with a flexible pricing picker. Perfect for donation products that offer custom contributions.

### 4. Images with Titles and Content

<img width="1243" alt="simple-donation-images" src="https://github.com/user-attachments/assets/81490187-da21-4511-b70f-ec0d2d8ead18">

Add titles and supporting text to your images to create visually compelling sections that deliver powerful messages.

### 5. Top Header

<img width="1277" alt="simple-donation-top-header" src="https://github.com/user-attachments/assets/25049216-fd3c-4a7d-80eb-7b6f7d0d66c1">

Include quick-access links for essential actions like:

- **Get Started**
    - Use [`top.header.cta.target`](http://top.header.cta.target) to set the link target
    - Use `top.header.cta_label` translation key to set the label
- **Account Access**
- **Shopping Cart**

### 6. Product Page Templates

Easily choose from various page templates to suit your needs:

- **Content-Type Pages**: Ideal for structured layouts.
- **Full-Width Landing Pages**: Ideal for standalone pages for single campaigns and landing page designs.

### 7. Progress Bar

<img width="1278" alt="simple-donation-progress-bar" src="https://github.com/user-attachments/assets/953f3fdf-1ff6-414c-a364-adca042a8e5b">

Show the progress of your fundraising goals with a visually appealing progress bar. Use it for individual campaigns or display a global campaign progress tracker to keep donors engaged.

### 8. Accordion

![simple-donation-accordions](https://github.com/user-attachments/assets/ad81af5d-38d8-4c1e-8a5f-85dd76c2bd32)

Organize and display custom content with an interactive accordion. Perfect for:

- **FAQ sections** to address common questions.
- Encapsulating additional information for donation products or merchandise.

### 9. Featured Donations

Highlight key campaigns with a featured donations carousel. Showcase outstanding donations to promote them and provide quick access to their respective pages.

> *Note: The progress bar selector and page templates picklist may require minor additional configuration for your organization—no advanced setup needed.*
> 

## How to Start Building Your Content with the Simple Donation Theme

Before getting started, note that some templates will require additional configuration within your organization upon installation. For example, you’ll need to add the following templates to your template picklist:

- `accordion`
- `donation_card`
- `donation_progress_bar`

For guidance, refer to our [Help Article: How to Add Templates to the Template Picklist](https://help.getstoreconnect.com/documentation/adding-templates-to-content-template-picklist.html).

Each template supports specific fields and options when setting up your content blocks. Below, you'll find a list of supported fields. Keep in mind that you can continue using the rest of the out-of-the-box templates to build your site. Consult the [content block templates](https://help.getstoreconnect.com/documentation/content-block-templates.html) help article for a complete overview of the supported fields for each template.

---

## Supported Fields and Relationships

### Accordion

**Supported Fields:**

- Title
- Content

---

### Container

**Supported Fields and Values:**

- **Alignment:**
    - `text-center`: Centers the headline and call-to-action if populated.
- Title
- Subtitle
- Child content blocks
- Link label and target

---

### Donation Card

**Primary Uses:**

1. Relate a product to dynamically populate the image and content.
2. Provide custom content by not linking a product.

**Supported Fields:**

- **Product**: If a product is linked, no image or content needs to be manually set. The product relationship also generates a donation box with a variable pricing picker if the donation product supports custom donations.

**Optional Fields (for Custom Content):**

- Image
- Title
- Subtitle
- Content
- Link target and label

---

### Donation Progress Bar

> Note: Setting up the progress bar requires additional configuration for your organization. We provide support documentation and guidance only.
> 

To create a global donation bar, configure two global custom fields at the store level:

- `Donations_Total__c`
- `Donation_Target__c`

Once set up, create a content block using the donation progress bar template and assign it to the page where you want the progress bar to display.

---

### Featured Products

**Supported Fields:**

- Title
- Link target and label
- **Products (Relationship Type):**
    - If 4 or fewer products are related, a grid layout is displayed.
    - If more than 4 products are related, a carousel is displayed.

---

### Image Beside Text

**Supported Fields:**

- Image
- Title
- Subtitle
- Content
- Link target and label

---

### Image Text Overlay

**Supported Fields:**

- Title
- Subtitle
- Content
- Link target and label
- **Type Field:**
    - "Set the background color" applies an overlay and changes the font color to white.
- **Product (Relationship Type):**
    - Displays a donation box on the right side.
- **Alignment:**
    - Center, left, or right.
- Video (takes precedence if both an image and video are provided).
- Image

---

### Image

Single images now support the following fields:

- Image
- Title
- Content (used as a caption)
- Link label and target (if set, turns the entire image into an anchor link with a hover effect).

---

## Translation Keys

Running a nonprofit store may require aligning text to your industry standards. By default, StoreConnect provides a comprehensive list of translatable strings you can configure to suit your needs.

For example:

- Replace “cart” with “basket.”
- Use “donor” instead of “customer.”

The Simple Donation theme includes a predefined set of translation keys, but you can extend them using our base theme as a reference.

[Learn More](https://github.com/GetStoreConnect/base-theme/blob/main/translations/en.default.csv)

---

## Variables

Activate or deactivate specific components by modifying the following variables. If a variable is not set or set to `false`, the component will not display.

- `product.social.share`: `active`
- `store.allow.promo.codes`: `false`
