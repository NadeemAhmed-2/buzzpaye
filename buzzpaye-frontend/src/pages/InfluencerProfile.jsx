import React, { useState, useEffect } from "react";
import api from "../utils/api";

const InfluencerProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "",
    category: "",
    bio: "",
    images: [],
    imageFiles: [],
    socialMediaHandles: [{ platform: "", link: "" }],
    prices: [{ type: "", amount: "" }],
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await api.get("/influencer/me", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (res.data) {
          const socialMediaHandles = [];
          const links = res.data.socialLinks || {};
          for (const [platform, link] of Object.entries(links)) {
            if (link)
              socialMediaHandles.push({
                platform: platform.charAt(0).toUpperCase() + platform.slice(1),
                link,
              });
          }

          setProfile({
            name: res.data.name || "",
            bio: res.data.bio || "",
            category: res.data.category || "",
            images: res.data.images || [],
            imageFiles: [],
            socialMediaHandles:
              socialMediaHandles.length > 0
                ? socialMediaHandles
                : [{ platform: "", link: "" }],
            prices:
              res.data.prices && res.data.prices.length > 0
                ? res.data.prices
                : [{ type: "", amount: "" }],
          });
        }
      } catch (err) {
        console.error("Failed to fetch profile:", err);
      }
    };
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handlePriceChange = (index, field, value) => {
    const updated = [...profile.prices];
    updated[index][field] = value;
    setProfile({ ...profile, prices: updated });
  };
  const addPriceField = () =>
    setProfile({
      ...profile,
      prices: [...profile.prices, { type: "", amount: "" }],
    });
  const removePriceField = (index) =>
    setProfile({
      ...profile,
      prices: profile.prices.filter((_, i) => i !== index),
    });

  // const handleSocialMediaChange = (index, field, value) => {
  //   const updated = [...profile.socialMediaHandles];
  //   updated[index][field] = value;
  //   setProfile({ ...profile, socialMediaHandles: updated });
  // };
  // const addSocialMediaHandle = () =>
  //   setProfile({
  //     ...profile,
  //     socialMediaHandles: [
  //       ...profile.socialMediaHandles,
  //       { platform: "", link: "" },
  //     ],
  //   });
  // const removeSocialMediaHandle = (index) =>
  //   setProfile({
  //     ...profile,
  //     socialMediaHandles: profile.socialMediaHandles.filter(
  //       (_, i) => i !== index
  //     ),
  //   });

const handleSocialMediaChange = (index, field, value) => {
  setProfile((prev) => {
    const updatedHandles = prev.socialMediaHandles.map((handle, i) =>
      i === index ? { ...handle, [field]: value } : handle
    );
    return { ...prev, socialMediaHandles: updatedHandles };
  });
};

const addSocialMediaHandle = () =>
  setProfile((prev) => ({
    ...prev,
    socialMediaHandles: [
      ...prev.socialMediaHandles,
      { platform: "", link: "" },
    ],
  }));

const removeSocialMediaHandle = (index) =>
  setProfile((prev) => ({
    ...prev,
    socialMediaHandles: prev.socialMediaHandles.filter((_, i) => i !== index),
  }));


  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const formData = new FormData();
      formData.append("name", profile.name);
      formData.append("bio", profile.bio);
      formData.append("category", profile.category);

      profile.prices.forEach((p, i) => {
        formData.append(`prices[${i}][type]`, p.type);
        formData.append(`prices[${i}][amount]`, p.amount);
      });

      const socialLinksObj = {};
      profile.socialMediaHandles.forEach((h) => {
        if (h.platform && h.link)
          socialLinksObj[h.platform.toLowerCase()] = h.link;
      });
      formData.append("socialLinks", JSON.stringify(socialLinksObj));

      profile.imageFiles.forEach((file) => formData.append("images", file));

      const res = await api.post("/influencer/", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      const linksArray = Object.entries(res.data.socialLinks || {}).map(
        ([platform, link]) => ({
          platform: platform.charAt(0).toUpperCase() + platform.slice(1),
          link,
        })
      );

      setProfile({
        name: res.data.name || "",
        bio: res.data.bio || "",
        category: res.data.category || "",
        images: res.data.images || [],
        imageFiles: [],
        socialMediaHandles:
          linksArray.length > 0 ? linksArray : [{ platform: "", link: "" }],
        prices: res.data.prices || [{ type: "", amount: "" }],
      });

      setIsEditing(false);
    } catch (err) {
      console.error("Failed to save profile:", err);
    }
  };

  const handleEdit = () => setIsEditing(true);

  return (
    <div className="min-h-screen flex justify-center items-center bg-grayCustom text-white px-6 py-10">
      <div className="w-full max-w-5xl bg-grayCustom flex flex-col md:flex-row rounded-2xl shadow-lg overflow-hidden p-6 md:p-10 gap-10">
        {/* IMAGE SECTION */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-start gap-3">
          {profile.images.length > 0 ? (
            <div className="relative">
              <img
                src={profile.images[0]}
                alt="Profile"
                className="w-56 h-56 rounded-xl border-4 border-primary object-cover shadow-lg"
              />
              {isEditing && (
                <button
                  type="button"
                  onClick={() =>
                    setProfile({
                      ...profile,
                      images: [],
                      imageFiles: [],
                    })
                  }
                  className="absolute top-1 right-1 text-white bg-lightRed rounded-full px-2 py-1 text-xs"
                >
                  ✖
                </button>
              )}
            </div>
          ) : (
            <div className="flex items-center justify-center w-56 h-56 rounded-xl border-2 border-primary text-gray-400 text-center text-sm">
              No Image Uploaded
            </div>
          )}

          {isEditing && (
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  const preview = URL.createObjectURL(file);
                  setProfile({
                    ...profile,
                    images: [preview],
                    imageFiles: [file],
                  });
                }
              }}
              className="w-56 text-xs border border-primary rounded-lg bg-grayCustom p-2 hover:bg-lightRed hover:text-white transition cursor-pointer"
            />
          )}
        </div>

        {/* INFO SECTION */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-primary text-center md:text-left mb-6">
            Influencer Profile
          </h2>

          {isEditing ? (
            <form
              onSubmit={handleSave}
              className="grid gap-4 text-sm text-white"
            >
              {/* Name */}
              <div>
                <label className="block mb-1 font-semibold text-primary">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                  className="w-full p-2 rounded-md border border-primary bg-grayCustom text-white focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              {/* Bio */}
              <div>
                <label className="block mb-1 font-semibold text-primary">
                  Bio
                </label>
                <textarea
                  name="bio"
                  value={profile.bio}
                  onChange={handleChange}
                  className="w-full p-2 rounded-md border border-primary bg-grayCustom text-white focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block mb-1 font-semibold text-primary">
                  Category
                </label>
                <select
                  name="category"
                  value={profile.category}
                  onChange={handleChange}
                  className="w-full p-2 rounded-md border border-primary bg-grayCustom text-white"
                  required
                >
                  <option value="">Select Category</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Food & Beverages">Food & Beverages</option>
                  <option value="Fashion & Lifestyle">
                    Fashion & Lifestyle
                  </option>
                  <option value="Shopping & Retail">Shopping & Retail</option>
                  <option value="Travel & Tourism">Travel & Tourism</option>
                </select>
              </div>

              {/* Pricing */}
              <div>
                <label className="block mb-1 font-semibold text-primary">
                  Pricing
                </label>
                {profile.prices.map((p, i) => (
                  <div
                    key={i}
                    className="flex flex-col sm:flex-row gap-3 mb-2 border border-primary p-2 rounded-md bg-secondary"
                  >
                    <select
                      value={p.type}
                      onChange={(e) =>
                        handlePriceChange(i, "type", e.target.value)
                      }
                      className="w-full sm:w-1/2 p-2 rounded-md bg-grayCustom border border-primary text-white text-sm"
                      required
                    >
                      <option value="">Select Type</option>
                      <option value="Story">Story</option>
                      <option value="Post">Post</option>
                      <option value="In-Visit">In-Visit</option>
                    </select>
                    <input
                      type="number"
                      value={p.amount}
                      onChange={(e) =>
                        handlePriceChange(i, "amount", e.target.value)
                      }
                      placeholder="Amount"
                      className="w-full sm:w-1/2 p-2 rounded-md bg-grayCustom border border-primary text-white text-sm"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => removePriceField(i)}
                      className="text-lightRed font-bold text-xs hover:text-white transition"
                    >
                      ✖
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addPriceField}
                  className="bg-primary text-white text-xs px-3 py-1 rounded-md hover:bg-lightRed transition"
                >
                  + Add Price
                </button>
              </div>

              {/* Social Media */}
              <div>
                <label className="block mb-1 font-semibold text-primary">
                  Social Media Handles
                </label>
                {profile.socialMediaHandles.map((handle, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row gap-3 mb-2 border border-primary p-2 rounded-md bg-secondary"
                  >
                    <select
                      value={handle.platform}
                      onChange={(e) =>
                        handleSocialMediaChange(
                          index,
                          "platform",
                          e.target.value
                        )
                      }
                      className="w-full sm:w-1/2 p-2 rounded-md bg-grayCustom border border-primary text-white text-sm"
                    >
                      <option value="">Platform</option>
                      <option value="Instagram">Instagram</option>
                      <option value="YouTube">YouTube</option>
                      <option value="Twitter">Twitter</option>
                      <option value="Facebook">Facebook</option>
                      <option value="LinkedIn">LinkedIn</option>
                    </select>
                    <input
                      type="text"
                      value={handle.link}
                      onChange={(e) =>
                        handleSocialMediaChange(index, "link", e.target.value)
                      }
                      placeholder="Profile Link"
                      className="w-full sm:w-1/2 p-2 rounded-md bg-grayCustom border border-primary text-white text-sm"
                    />
                    {profile.socialMediaHandles.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeSocialMediaHandle(index)}
                        className="text-lightRed hover:text-white text-xs"
                      >
                        ✖
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addSocialMediaHandle}
                  className="bg-primary text-white text-xs px-3 py-1 rounded-md hover:bg-lightRed transition"
                >
                  + Add Another
                </button>
              </div>

              <button
                type="submit"
                className="mt-4 bg-primary text-white px-5 py-2 rounded-md font-semibold text-sm hover:bg-lightRed transition"
              >
                Save Profile
              </button>
            </form>
          ) : (
            <div className="space-y-3 text-sm text-gray-500">
              <p>
                <strong className="text-primary">Name:</strong> {profile.name}
              </p>
              <p>
                <strong className="text-primary">Bio:</strong> {profile.bio}
              </p>
              <p>
                <strong className="text-primary">Category:</strong> {profile.category}
              </p>
              <p>
                <strong className="text-primary">Prices:</strong>
              </p>
              <ul className="list-disc ml-5">
                {profile.prices.map((p, i) => (
                  <li key={i}>
                    {p.type}: ${p.amount}
                  </li>
                ))}
              </ul>
              <p>
                <strong className="text-primary">Social Media:</strong>
              </p>
              <ul className="list-disc ml-5">
                {profile.socialMediaHandles.map((h, i) =>
                  h.link ? (
                    <li key={i}>
                      <a
                        href={h.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary underline hover:text-lightRed"
                      >
                        {h.platform}
                      </a>
                    </li>
                  ) : (
                    <li key={i}>{h.platform}</li>
                  )
                )}
              </ul>
              <button
                onClick={handleEdit}
                className="mt-3 bg-primary text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-lightRed transition"
              >
                Edit Profile
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InfluencerProfile;
