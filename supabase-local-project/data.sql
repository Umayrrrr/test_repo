SET session_replication_role = replica;

--
-- PostgreSQL database dump
--

-- \restrict OhRnYnd3dTH3dLduARbTrL4HfGuDg9IQp1lkOapSlncaD3H2iVy9KE5z9OQpT9O

-- Dumped from database version 17.6
-- Dumped by pg_dump version 17.6

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: audit_log_entries; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY "auth"."audit_log_entries" ("instance_id", "id", "payload", "created_at", "ip_address") FROM stdin;
\.


--
-- Data for Name: custom_oauth_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY "auth"."custom_oauth_providers" ("id", "provider_type", "identifier", "name", "client_id", "client_secret", "acceptable_client_ids", "scopes", "pkce_enabled", "attribute_mapping", "authorization_params", "enabled", "email_optional", "issuer", "discovery_url", "skip_nonce_check", "cached_discovery", "discovery_cached_at", "authorization_url", "token_url", "userinfo_url", "jwks_uri", "created_at", "updated_at") FROM stdin;
\.


--
-- Data for Name: flow_state; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY "auth"."flow_state" ("id", "user_id", "auth_code", "code_challenge_method", "code_challenge", "provider_type", "provider_access_token", "provider_refresh_token", "created_at", "updated_at", "authentication_method", "auth_code_issued_at", "invite_token", "referrer", "oauth_client_state_id", "linking_target_id", "email_optional") FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY "auth"."users" ("instance_id", "id", "aud", "role", "email", "encrypted_password", "email_confirmed_at", "invited_at", "confirmation_token", "confirmation_sent_at", "recovery_token", "recovery_sent_at", "email_change_token_new", "email_change", "email_change_sent_at", "last_sign_in_at", "raw_app_meta_data", "raw_user_meta_data", "is_super_admin", "created_at", "updated_at", "phone", "phone_confirmed_at", "phone_change", "phone_change_token", "phone_change_sent_at", "email_change_token_current", "email_change_confirm_status", "banned_until", "reauthentication_token", "reauthentication_sent_at", "is_sso_user", "deleted_at", "is_anonymous") FROM stdin;
00000000-0000-0000-0000-000000000000	c850c285-a269-499c-bdac-f0bc94ddd74f	authenticated	authenticated	messi@gmail.com	$2a$10$OuP2ltKKGOr6myZ.Pt0.KOZ.0GVuZwzbry1WpG9.BJ9Cb1mW0.YAm	2026-02-26 09:22:58.663701+00	\N		\N		\N			\N	2026-02-27 03:52:39.997651+00	{"provider": "email", "providers": ["email"]}	{"role": "user", "last_name": "Messi", "first_name": "Leo", "email_verified": true}	\N	2026-02-26 09:22:58.604029+00	2026-02-27 03:52:40.015855+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	966257ad-ea4a-4b1f-becf-ed5caf76eecc	authenticated	authenticated	umair@gmail.com	$2a$10$SgfDJnOPi2dERgbT6bi2vOK3EeaF5colBM1pRkEm/vpfF6TEzbnyC	2026-02-23 07:15:25.222878+00	\N		\N		\N			\N	2026-02-27 04:14:22.132732+00	{"provider": "email", "providers": ["email"]}	{"sub": "966257ad-ea4a-4b1f-becf-ed5caf76eecc", "role": "admin", "email": "umair@gmail.com", "last_name": "", "first_name": "Umair", "email_verified": true, "phone_verified": false}	\N	2026-02-20 11:25:50.480204+00	2026-02-27 05:19:42.827497+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	a89233f9-a8d6-4047-88c2-d640e51bb90b	authenticated	authenticated	test@gmail.com	$2a$10$eWKnPbrLguKj3jeXwSMSwuolGRjK25q4wdQqgykEjD91J5t0CtwzW	2026-02-25 10:20:05.114283+00	\N		\N		\N			\N	2026-02-26 06:58:03.472547+00	{"provider": "email", "providers": ["email"]}	{"sub": "a89233f9-a8d6-4047-88c2-d640e51bb90b", "email": "test@gmail.com", "last_name": "", "first_name": "Test", "email_verified": true, "phone_verified": false}	\N	2026-02-25 10:20:05.080507+00	2026-02-26 08:43:27.52096+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	3bdfa379-5c69-462e-ade2-dde860325e47	authenticated	authenticated	spidey@gmail.com	$2a$10$3Cy7eZF1xDKbwY8s8CQ2.eWaib66jIBHo.Kv5WGxn.oTq1XiPF.7W	2026-02-20 11:37:28.957179+00	\N		\N		\N			\N	2026-02-26 06:52:35.968135+00	{"provider": "email", "providers": ["email"]}	{"sub": "3bdfa379-5c69-462e-ade2-dde860325e47", "role": "user", "email": "spidey@gmail.com", "last_name": "Morales", "first_name": "Tom", "email_verified": true, "phone_verified": false}	\N	2026-02-18 11:06:04.94248+00	2026-02-27 04:13:11.255718+00	\N	\N			\N		0	2126-02-28 04:13:11.255274+00		\N	f	\N	f
00000000-0000-0000-0000-000000000000	a4a8a2d7-a52b-459e-addc-09143791ae44	authenticated	authenticated	tom@gmail.com	$2a$10$QoF8UTsCn.QiA8MuGmB2Cu3WO0fYPR1kn0mVZ6idEK4TAWuNFxTLS	2026-02-23 08:30:03.53914+00	\N		\N		\N			\N	\N	{"provider": "email", "providers": ["email"]}	{"role": "user", "last_name": "Hiddleston", "first_name": "Tom", "email_verified": true}	\N	2026-02-23 08:30:03.533778+00	2026-02-26 06:41:41.257944+00	\N	\N			\N		0	2126-02-27 06:41:41.257703+00		\N	f	\N	f
00000000-0000-0000-0000-000000000000	f0f2ded7-6b93-49ab-8c56-68ef2bb6f349	authenticated	authenticated	nobita@gmail.com	$2a$10$U33VOLgAvkBySVYiLAvf0uIFTfQcDXZ5/GIc.EKScJ30K0Dxi.rLu	2026-02-26 09:05:47.912294+00	\N		\N		\N			\N	\N	{"provider": "email", "providers": ["email"]}	{"role": "user", "last_name": "Khan", "first_name": "Nobita ", "email_verified": true}	\N	2026-02-23 09:18:59.871776+00	2026-02-26 09:06:00.443665+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	6cecfc48-a3f4-4256-82cd-633303fee4be	authenticated	authenticated	thompson@gmail.com	$2a$10$Sma7QGYiUGZfS5ZxxhQZl.HCiucpaxtR5vkXLihEayv7DdG4eamge	2026-02-23 07:03:52.418111+00	\N		\N		\N			\N	2026-02-20 11:16:20.811683+00	{"provider": "email", "providers": ["email"]}	{"sub": "6cecfc48-a3f4-4256-82cd-633303fee4be", "role": "user", "email": "thompson@gmail.com", "last_name": "Thompson", "first_name": "Leo", "email_verified": true, "phone_verified": false}	\N	2026-02-20 11:16:16.357843+00	2026-02-26 08:51:03.270979+00	\N	\N			\N		0	2126-02-27 08:51:03.270768+00		\N	f	\N	f
00000000-0000-0000-0000-000000000000	e69d561d-dc21-4793-b182-dc3db59fa8aa	authenticated	authenticated	john@gmail.com	$2a$10$4n/Eet4t5KNpAMRUL9D.qe7zhc8GqvHUVpj3MsGcrwemPLg1sFlce	2026-02-23 10:32:36.272192+00	\N		\N		\N			\N	\N	{"provider": "email", "providers": ["email"]}	{"role": "user", "last_name": "Doe", "first_name": "John", "email_verified": true}	\N	2026-02-23 10:32:36.225755+00	2026-02-26 06:41:41.19538+00	\N	\N			\N		0	\N		\N	f	\N	f
\.


--
-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY "auth"."identities" ("provider_id", "user_id", "identity_data", "provider", "last_sign_in_at", "created_at", "updated_at", "id") FROM stdin;
3bdfa379-5c69-462e-ade2-dde860325e47	3bdfa379-5c69-462e-ade2-dde860325e47	{"sub": "3bdfa379-5c69-462e-ade2-dde860325e47", "email": "spidey@gmail.com", "last_name": "Morales", "first_name": "Miles", "email_verified": true, "phone_verified": false}	email	2026-02-18 11:06:04.998066+00	2026-02-18 11:06:04.998126+00	2026-02-18 11:06:04.998126+00	19e226b2-e9ef-440c-81f5-2d06fdd5fabc
6cecfc48-a3f4-4256-82cd-633303fee4be	6cecfc48-a3f4-4256-82cd-633303fee4be	{"sub": "6cecfc48-a3f4-4256-82cd-633303fee4be", "email": "thompson@gmail.com", "last_name": "Thompson", "first_name": "Leo", "email_verified": true, "phone_verified": false}	email	2026-02-20 11:16:16.398042+00	2026-02-20 11:16:16.39812+00	2026-02-20 11:16:16.39812+00	7dd1c366-6591-47ba-b660-01b75d93f4f3
966257ad-ea4a-4b1f-becf-ed5caf76eecc	966257ad-ea4a-4b1f-becf-ed5caf76eecc	{"sub": "966257ad-ea4a-4b1f-becf-ed5caf76eecc", "email": "umair@gmail.com", "last_name": "", "first_name": "Umair", "email_verified": true, "phone_verified": false}	email	2026-02-20 11:25:50.543727+00	2026-02-20 11:25:50.543785+00	2026-02-20 11:25:50.543785+00	0b4a51c3-0089-4ac8-a56b-80243a37dd6b
a4a8a2d7-a52b-459e-addc-09143791ae44	a4a8a2d7-a52b-459e-addc-09143791ae44	{"sub": "a4a8a2d7-a52b-459e-addc-09143791ae44", "email": "tom@gmail.com", "email_verified": false, "phone_verified": false}	email	2026-02-23 08:30:03.537331+00	2026-02-23 08:30:03.537384+00	2026-02-23 08:30:03.537384+00	f20292c5-90dc-47ff-aa23-1b66a9fe775d
e69d561d-dc21-4793-b182-dc3db59fa8aa	e69d561d-dc21-4793-b182-dc3db59fa8aa	{"sub": "e69d561d-dc21-4793-b182-dc3db59fa8aa", "email": "john@gmail.com", "email_verified": false, "phone_verified": false}	email	2026-02-23 10:32:36.269368+00	2026-02-23 10:32:36.269441+00	2026-02-23 10:32:36.269441+00	c8452b18-1502-4289-b6d0-d4d5b33b96d2
a89233f9-a8d6-4047-88c2-d640e51bb90b	a89233f9-a8d6-4047-88c2-d640e51bb90b	{"sub": "a89233f9-a8d6-4047-88c2-d640e51bb90b", "email": "test@gmail.com", "last_name": "", "first_name": "Test", "email_verified": false, "phone_verified": false}	email	2026-02-25 10:20:05.105105+00	2026-02-25 10:20:05.105159+00	2026-02-25 10:20:05.105159+00	4d8ea7bc-ca49-43f7-8ec4-a5b45f5d0cf9
f0f2ded7-6b93-49ab-8c56-68ef2bb6f349	f0f2ded7-6b93-49ab-8c56-68ef2bb6f349	{"sub": "f0f2ded7-6b93-49ab-8c56-68ef2bb6f349", "email": "nobita@gmail.com", "email_verified": true, "phone_verified": false}	email	2026-02-23 09:18:59.893323+00	2026-02-23 09:18:59.893384+00	2026-02-23 09:18:59.893384+00	0fc175a4-62e8-4208-8507-e7f5eb424900
c850c285-a269-499c-bdac-f0bc94ddd74f	c850c285-a269-499c-bdac-f0bc94ddd74f	{"sub": "c850c285-a269-499c-bdac-f0bc94ddd74f", "email": "messi@gmail.com", "email_verified": false, "phone_verified": false}	email	2026-02-26 09:22:58.653723+00	2026-02-26 09:22:58.653782+00	2026-02-26 09:22:58.653782+00	7b5714a0-d9b5-4d9f-b8be-482d9cc8cf7e
\.


--
-- Data for Name: instances; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY "auth"."instances" ("id", "uuid", "raw_base_config", "created_at", "updated_at") FROM stdin;
\.


--
-- Data for Name: oauth_clients; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY "auth"."oauth_clients" ("id", "client_secret_hash", "registration_type", "redirect_uris", "grant_types", "client_name", "client_uri", "logo_uri", "created_at", "updated_at", "deleted_at", "client_type", "token_endpoint_auth_method") FROM stdin;
\.


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY "auth"."sessions" ("id", "user_id", "created_at", "updated_at", "factor_id", "aal", "not_after", "refreshed_at", "user_agent", "ip", "tag", "oauth_client_id", "refresh_token_hmac_key", "refresh_token_counter", "scopes") FROM stdin;
f5de997a-9f35-48f1-b552-359a6144b58e	966257ad-ea4a-4b1f-becf-ed5caf76eecc	2026-02-27 04:14:22.135327+00	2026-02-27 04:14:22.135327+00	\N	aal1	\N	\N	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36	154.192.45.15	\N	\N	\N	\N	\N
df1e7318-5a80-43fd-ad37-b03d787bb5b1	966257ad-ea4a-4b1f-becf-ed5caf76eecc	2026-02-27 04:04:52.536612+00	2026-02-27 05:19:42.83881+00	\N	aal1	\N	2026-02-27 05:19:42.838679	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36	154.192.45.15	\N	\N	\N	\N	\N
\.


--
-- Data for Name: mfa_amr_claims; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY "auth"."mfa_amr_claims" ("session_id", "created_at", "updated_at", "authentication_method", "id") FROM stdin;
df1e7318-5a80-43fd-ad37-b03d787bb5b1	2026-02-27 04:04:52.565049+00	2026-02-27 04:04:52.565049+00	password	407dc480-14fb-4eb6-989a-c375e8665b37
f5de997a-9f35-48f1-b552-359a6144b58e	2026-02-27 04:14:22.152286+00	2026-02-27 04:14:22.152286+00	password	a71d0845-8ad0-4453-bb0c-69471e26ccd2
\.


--
-- Data for Name: mfa_factors; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY "auth"."mfa_factors" ("id", "user_id", "friendly_name", "factor_type", "status", "created_at", "updated_at", "secret", "phone", "last_challenged_at", "web_authn_credential", "web_authn_aaguid", "last_webauthn_challenge_data") FROM stdin;
\.


--
-- Data for Name: mfa_challenges; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY "auth"."mfa_challenges" ("id", "factor_id", "created_at", "verified_at", "ip_address", "otp_code", "web_authn_session_data") FROM stdin;
\.


--
-- Data for Name: oauth_authorizations; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY "auth"."oauth_authorizations" ("id", "authorization_id", "client_id", "user_id", "redirect_uri", "scope", "state", "resource", "code_challenge", "code_challenge_method", "response_type", "status", "authorization_code", "created_at", "expires_at", "approved_at", "nonce") FROM stdin;
\.


--
-- Data for Name: oauth_client_states; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY "auth"."oauth_client_states" ("id", "provider_type", "code_verifier", "created_at") FROM stdin;
\.


--
-- Data for Name: oauth_consents; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY "auth"."oauth_consents" ("id", "user_id", "client_id", "scopes", "granted_at", "revoked_at") FROM stdin;
\.


--
-- Data for Name: one_time_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY "auth"."one_time_tokens" ("id", "user_id", "token_type", "token_hash", "relates_to", "created_at", "updated_at") FROM stdin;
\.


--
-- Data for Name: refresh_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY "auth"."refresh_tokens" ("instance_id", "id", "token", "user_id", "revoked", "created_at", "updated_at", "parent", "session_id") FROM stdin;
00000000-0000-0000-0000-000000000000	180	jwjn4hzs37fq	966257ad-ea4a-4b1f-becf-ed5caf76eecc	f	2026-02-27 04:14:22.143926+00	2026-02-27 04:14:22.143926+00	\N	f5de997a-9f35-48f1-b552-359a6144b58e
00000000-0000-0000-0000-000000000000	179	gw6hi3s5fkge	966257ad-ea4a-4b1f-becf-ed5caf76eecc	t	2026-02-27 04:04:52.557828+00	2026-02-27 05:19:42.775859+00	\N	df1e7318-5a80-43fd-ad37-b03d787bb5b1
00000000-0000-0000-0000-000000000000	181	r7nzv4xdkd5v	966257ad-ea4a-4b1f-becf-ed5caf76eecc	f	2026-02-27 05:19:42.8103+00	2026-02-27 05:19:42.8103+00	gw6hi3s5fkge	df1e7318-5a80-43fd-ad37-b03d787bb5b1
\.


--
-- Data for Name: sso_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY "auth"."sso_providers" ("id", "resource_id", "created_at", "updated_at", "disabled") FROM stdin;
\.


--
-- Data for Name: saml_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY "auth"."saml_providers" ("id", "sso_provider_id", "entity_id", "metadata_xml", "metadata_url", "attribute_mapping", "created_at", "updated_at", "name_id_format") FROM stdin;
\.


--
-- Data for Name: saml_relay_states; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY "auth"."saml_relay_states" ("id", "sso_provider_id", "request_id", "for_email", "redirect_to", "created_at", "updated_at", "flow_state_id") FROM stdin;
\.


--
-- Data for Name: sso_domains; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY "auth"."sso_domains" ("id", "sso_provider_id", "domain", "created_at", "updated_at") FROM stdin;
\.


--
-- Data for Name: profiles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY "public"."profiles" ("id", "created_at", "email", "first_name", "last_name", "role", "is_active") FROM stdin;
3bdfa379-5c69-462e-ade2-dde860325e47	2026-02-18 11:06:04.942101+00	spidey@gmail.com	Tom	Morales	user	t
6cecfc48-a3f4-4256-82cd-633303fee4be	2026-02-20 11:16:16.356945+00	thompson@gmail.com	Leo	Thompson	user	t
966257ad-ea4a-4b1f-becf-ed5caf76eecc	2026-02-20 11:25:50.479852+00	umair@gmail.com	Umair		admin	t
a4a8a2d7-a52b-459e-addc-09143791ae44	2026-02-23 08:30:03.533439+00	tom@gmail.com	Tom	Hiddleston	user	t
e69d561d-dc21-4793-b182-dc3db59fa8aa	2026-02-23 10:32:36.224066+00	john@gmail.com	John	Doe	user	t
a89233f9-a8d6-4047-88c2-d640e51bb90b	2026-02-25 10:20:05.08019+00	test@gmail.com	Test		user	t
f0f2ded7-6b93-49ab-8c56-68ef2bb6f349	2026-02-23 09:18:59.871422+00	nobita@gmail.com	Nobita 	Khan	user	t
c850c285-a269-499c-bdac-f0bc94ddd74f	2026-02-26 09:22:58.601917+00	messi@gmail.com	Leo	Messi	user	t
\.


--
-- Data for Name: buckets; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--

COPY "storage"."buckets" ("id", "name", "owner", "created_at", "updated_at", "public", "avif_autodetection", "file_size_limit", "allowed_mime_types", "owner_id", "type") FROM stdin;
\.


--
-- Data for Name: buckets_analytics; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--

COPY "storage"."buckets_analytics" ("name", "type", "format", "created_at", "updated_at", "id", "deleted_at") FROM stdin;
\.


--
-- Data for Name: buckets_vectors; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--

COPY "storage"."buckets_vectors" ("id", "type", "created_at", "updated_at") FROM stdin;
\.


--
-- Data for Name: objects; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--

COPY "storage"."objects" ("id", "bucket_id", "name", "owner", "created_at", "updated_at", "last_accessed_at", "metadata", "version", "owner_id", "user_metadata") FROM stdin;
\.


--
-- Data for Name: s3_multipart_uploads; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--

COPY "storage"."s3_multipart_uploads" ("id", "in_progress_size", "upload_signature", "bucket_id", "key", "version", "owner_id", "created_at", "user_metadata") FROM stdin;
\.


--
-- Data for Name: s3_multipart_uploads_parts; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--

COPY "storage"."s3_multipart_uploads_parts" ("id", "upload_id", "size", "part_number", "bucket_id", "key", "etag", "owner_id", "version", "created_at") FROM stdin;
\.


--
-- Data for Name: vector_indexes; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--

COPY "storage"."vector_indexes" ("id", "name", "bucket_id", "data_type", "dimension", "distance_metric", "metadata_configuration", "created_at", "updated_at") FROM stdin;
\.


--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE SET; Schema: auth; Owner: supabase_auth_admin
--

SELECT pg_catalog.setval('"auth"."refresh_tokens_id_seq"', 181, true);


--
-- PostgreSQL database dump complete
--

-- \unrestrict OhRnYnd3dTH3dLduARbTrL4HfGuDg9IQp1lkOapSlncaD3H2iVy9KE5z9OQpT9O

RESET ALL;
