import {useSearchParams} from 'react-router-dom';

export default function Auth() {
  const [searchParams, setSearchParams] = useSearchParams();
  const code = searchParams.get("code")

  fetch("/auth/token?code="+code)
  .then(() => window.location.replace("/"))
}
