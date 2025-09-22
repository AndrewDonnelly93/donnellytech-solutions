"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import {
  useState,
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Alert,
  CircularProgress,
  useTheme,
  Grid,
  FormControl,
  FormHelperText,
} from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";
import type ReCAPTCHAType from "react-google-recaptcha";
import * as z from "zod";
import dynamic from "next/dynamic";

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

const RawReCAPTCHA = dynamic(() => import("react-google-recaptcha"), {
  ssr: false,
});

const ReCAPTCHA = forwardRef<
  ReCAPTCHAType,
  React.ComponentProps<typeof RawReCAPTCHA>
>((props, ref) => {
  const innerRef = useRef<ReCAPTCHAType>(null);
  useImperativeHandle(ref, () => innerRef.current as ReCAPTCHAType);
  return (
    // @ts-expect-error - TypeScript ref forwarding quirk
    <RawReCAPTCHA {...props} ref={innerRef as React.RefObject<ReCAPTCHAType>} />
  );
});
ReCAPTCHA.displayName = "ReCAPTCHA";

// Schema + Types
const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
  token: z.string().min(1, "reCAPTCHA token is required"),
});

type ContactFormData = z.infer<typeof schema>;

type StatusState = {
  success: string | null;
  error: string | null;
  loading: boolean;
};

const ContactPage = () => {
  const theme = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const recaptchaRef = useRef<ReCAPTCHAType>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  const [status, setStatus] = useState<StatusState>({
    success: null,
    error: null,
    loading: false,
  });

  const token = watch("token");

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    if (!token) return;

    setStatus({ success: null, error: null, loading: true });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, token }),
      });

      const json = await response.json();

      if (response.ok) {
        setStatus({ success: "Message sent!", error: null, loading: false });
        reset();

        recaptchaRef.current?.reset();
        setValue("token", "");
      } else {
        setStatus({
          success: null,
          error: json.error || "Failed to send message.",
          loading: false,
        });
      }
    } catch {
      setStatus({
        success: null,
        error: "Something went wrong. Please try again.",
        loading: false,
      });
    }
  };

  return (
    <Box
      component="main"
      sx={{
        minHeight: "80vh",
        px: { xs: 2, sm: 4, md: 6 },
        py: { xs: 4, sm: 6, md: 8 },
        maxWidth: 600,
        mx: "auto",
        mt: 10,
        mb: 10,
        bgcolor: theme.palette.background.paper + "DD",
        borderRadius: 2,
        boxShadow: 3,
        color: theme.palette.text.primary,
        fontFamily: theme.typography.body1.fontFamily,
      }}
    >
      <Typography
        variant="h3"
        mb={4}
        textAlign="center"
        sx={{
          fontFamily: theme.typography.h2.fontFamily,
          fontWeight: 600,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: theme.palette.primary.main,
        }}
      >
        Contact Me
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontFamily: theme.typography.body1.fontFamily,
          mb: 4,
          textAlign: { xs: "center", sm: "left" },
        }}
      >
        If you have any questions or would like to order a website or would like to get English lessons from Andrew
        Donnelly, please fill out the form below.
      </Typography>

      {status.success && (
        <Grid sx={{ mb: 4 }}>
          <Alert
            severity="success"
            variant="filled"
            sx={{
              backgroundColor:
                theme.palette.mode === "dark"
                  ? theme.palette.success.dark
                  : theme.palette.success.main,
              color: "common.white",
            }}
          >
            {status.success}
          </Alert>
        </Grid>
      )}

      {status.error && (
        <Grid sx={{ mb: 4 }}>
          <Alert
            severity="error"
            variant="filled"
            sx={{
              backgroundColor:
                theme.palette.mode === "dark"
                  ? theme.palette.error.dark
                  : theme.palette.error.main,
              color: "common.white",
            }}
          >
            {status.error}
          </Alert>
        </Grid>
      )}

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Grid container spacing={3} direction="column">
          {/* Name */}
          <Grid size={{ xs: 12 }}>
            <FormControl fullWidth error={!!errors.name}>
              <TextField
                label="Name"
                {...register("name")}
                error={!!errors.name}
                helperText={errors.name?.message}
                fullWidth
                margin="normal"
                required
                slotProps={{
                  inputLabel: {
                    style: {
                      color: theme.palette.primary.main,
                      transition: "color 0.3s",
                    },
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    color: theme.palette.text.primary,
                    transition: "border-color 0.3s, box-shadow 0.3s",
                    "&:hover fieldset": {
                      borderColor: theme.palette.secondary.main,
                      boxShadow: `0 0 8px ${theme.palette.secondary.main}`,
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: theme.palette.secondary.main,
                      borderWidth: 2,
                      boxShadow: `0 0 10px ${theme.palette.secondary.main}`,
                    },
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: theme.palette.secondary.main,
                  },
                }}
              />
            </FormControl>
          </Grid>

          {/* Email */}
          <Grid size={{ xs: 12 }}>
            <FormControl fullWidth error={!!errors.email}>
              <TextField
                label="Email"
                type="email"
                {...register("email")}
                error={!!errors.email}
                helperText={errors.email?.message}
                fullWidth
                margin="normal"
                required
                slotProps={{
                  inputLabel: {
                    style: {
                      color: theme.palette.primary.main,
                      transition: "color 0.3s",
                    },
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    color: theme.palette.text.primary,
                    transition: "border-color 0.3s, box-shadow 0.3s",
                    "&:hover fieldset": {
                      borderColor: theme.palette.secondary.main,
                      boxShadow: `0 0 8px ${theme.palette.secondary.main}`,
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: theme.palette.secondary.main,
                      borderWidth: 2,
                      boxShadow: `0 0 10px ${theme.palette.secondary.main}`,
                    },
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: theme.palette.secondary.main,
                  },
                }}
              />
            </FormControl>
          </Grid>

          {/* Message */}
          <Grid size={{ xs: 12 }}>
            <FormControl fullWidth error={!!errors.message}>
              <TextField
                label="Message"
                {...register("message")}
                error={!!errors.message}
                helperText={errors.message?.message}
                fullWidth
                margin="normal"
                required
                multiline
                minRows={4}
                slotProps={{
                  inputLabel: {
                    style: {
                      color: theme.palette.primary.main,
                      transition: "color 0.3s",
                    },
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    color: theme.palette.text.primary,
                    transition: "border-color 0.3s, box-shadow 0.3s",
                    "&:hover fieldset": {
                      borderColor: theme.palette.secondary.main,
                      boxShadow: `0 0 8px ${theme.palette.secondary.main}`,
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: theme.palette.secondary.main,
                      borderWidth: 2,
                      boxShadow: `0 0 10px ${theme.palette.secondary.main}`,
                    },
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: theme.palette.secondary.main,
                  },
                }}
              />
            </FormControl>
          </Grid>

          {/* reCAPTCHA */}
          <Grid
            size={{ xs: 12 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              opacity: mounted ? 1 : 0,
              transition: "opacity 0.3s ease-in-out",
              height: 78,
              backgroundColor:
                theme.palette.mode === "dark"
                  ? theme.palette.background.default
                  : "transparent",
              borderRadius: 2,
              p: 1,
            }}
          >
            {mounted ? (
              <ReCAPTCHA
                sitekey={RECAPTCHA_SITE_KEY}
                onChange={(value) =>
                  setValue("token", value || "", { shouldValidate: true })
                }
                ref={recaptchaRef}
              />
            ) : (
              <div style={{ height: "78px", width: "304px" }} />
            )}
            {errors.token && (
              <FormHelperText sx={{ mt: 2 }}>
                {errors.token.message}
              </FormHelperText>
            )}
          </Grid>

          {/* Submit Button */}
          <Grid
            size={{ xs: 12 }}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              disabled={status.loading}
              fullWidth
              size="large"
              sx={{
                textTransform: "uppercase",
                fontWeight: "bold",
                fontFamily: theme.typography.button.fontFamily,
                transition: "background-color 0.3s, box-shadow 0.3s",
                "&:hover": {
                  backgroundColor: theme.palette.secondary.dark,
                  boxShadow: `0 0 15px ${theme.palette.secondary.main}`,
                },
              }}
            >
              {status.loading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Send Message"
              )}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default ContactPage;
