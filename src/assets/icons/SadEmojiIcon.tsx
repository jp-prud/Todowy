import Svg, { Defs, Image, Path, Pattern, Use } from 'react-native-svg';

export function SadEmojiIcon() {
  return (
    <Svg width="72" height="72" fill="none">
      <Path fill="url(#a)" d="M0 0h72v72H0z" />
      <Defs>
        <Pattern
          id="a"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox">
          <Use xlinkHref="#b" transform="scale(.008)" />
        </Pattern>
        <Image
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAC+lBMVEUAAADglyfJfSfGeSDIfivhfAPCaxHMeh/HaATDZwrBaArOex/7lgbNbATFaAjKcBLynR7afhfBbRT+mAXyhgXJaQXGaAjshw/EaQziiyDHaQbPcQ3Lbg7njB3DcRb8oQ75kwn8rBblfAf0jQv0lhPRcAvylhfsiBDGbA7rjxvnfgnlfgvdeg7vlx7ScAX6qBj4oBX2oRrdew//4jL/3DHsnBH/xTn7rBb/zzf/yzj2pRT/2S7/2TL/sxv/vTH/3zD/wTr/uSb/+7P/uyzxoRP/+IL/wzj/5zb/1jD/vyr4pxX/93D/tiD+rxj5qhL/6Tvnlg/hiwvYfwaRVAX//uD/+Zf/+Y3/tyT/yDr/0jH/3S7/yi3zoxLqmA7//dT//L7/+If/92n/7kT/7D//vjblkQzijwz/+p3/9l3vnxJyOgNsNQP/+qn/8Uv8rxX/+7n/+67/+qX/+ZL/+Hf/1i3/0Sz7qRbXfAX/+aH/+Hv/0zb/uin/rAl1PwbVeQV/RgTNbgP/5Dn/zi7+tR79sxjokwzciAqQVQnTdQT//cr/9VH/xC3/sRn/pQiESgZuOATQcQP//dn//M//9lf/4Ur/zT//1jXxnQrdhQjaggj//Mb//ML/61j/zzGdZxH/uwz/6H7/wjL/xSn2uyj2pg7/8F7+1Ub/20KwhiHGfRb2nAnsjgV5QAX/8X3/7XT/9mThryf/xQ//tQn/ngbKbAP/74//8GX/7kj/00L/1T3tryL/1BbgiAmJTwfligb/8Yf/3F/+5VH/0U7/yyr/3B38kgTVdgTyigNmMQP//uj/53H/32z/8Gv/6WT/5Fz/2Fb/31T/6U7/2k3/2zjWujS6lSn/wRqVWwz/83TnzT7Jpi/ruii4jiWfcBj/42flpiK9fxb/zRXeggX/85j/8lb36Ubz2T/yzD/AnyzcnR3dlRv/vRewexepcxf/sA/twjzQnST/yx3EjRuLWA7s20z73EPOsDjsxzXirCX/uhrPjRf3xTnzwzBgKwLm7WBTAAAAM3RSTlMAAggYEf5cLfasniL8971nm1ZQ/vXrzKSKTNylllw29O/24dK6tK6Xd3PHupiI9uTYw4ekF4y1AAAJvElEQVRYw7zTaUjTYRzA8eaBLxw0MxApy6PLDjocZmjFDKuRuTdeFOTSF4XzammobcRyb8zm0LYCXTotnahbuDHTRrhDmWk7veadeCRYomaFUdDv//ifeXVH3zfbnufhw+///NmGf5TDhv8XgeDgQCD8HeHk4ul/gETatYtEOuDv6eJE+CPF1Yt0+KAPd2GqG5pa4PocPEzycv3du3DyJB3y4U51j6hUzSiVaqR7iutziOTp9DuM147t06V1I6rmAEuFTUqnh9nqLZxm1Ujd1PT2HV6Ov/omPRGjarZIk4oKIl8sFlkY2iS6oKorBcrtlx7Qdbc3CxiOLPRS5GIvIvEuxTUJgGJt93D5+R27+fHkdSMdTXGXoIKCAjsCX7GVolHBSJ2c5+f1k6Gc/L3BSZel5kKFhZiFQkphYW5uUW6csgMk7wM/vHTH3UR4LEFmXFxccXFREVBgoQqRUlRcDFtpQ7OlLKKH4w8cD3Bmh9JCQ1NTU3ELBkMIKBiSmhoKiTNKWe67XL/vuIMjTkpKSwMLx0ADArIjsJmUpMzGpO/M5ATPJdeJMzOvQXYMaZiBFMyAzczMTGUjSB7r3hPBn8iTz4pHR6OuQJhmHw2VZkdgMypqdFQZJOcRj6z37ty8FfLudqVSyWRGQRiGNDzMWESimEwmHBNflCu8vdY6rn5wQSZxU1MTPTo6molriIOAsBvREB2Oidu7WQo/lzX/i90tPLlQLBZLpWFhdCgaceDhMe0GFBYmlcJRUymvZc01eW5WsMrb29pkMqk0KysrDKLjHh4dEVBWllQqlcna2tpjWYrNbqve2D4YSNuOJJvNdh1C3IqyIGzHZpMhp129wGvZ67jypmGgPLV6aMhgeAmdQ12HEIgA6Nxi2AmDYWhIrRayFPqNqwea1prUaqPRYKiHnlxGnVvR4lo9lsFgNKrVJm34ypHghtx5VK3JZDYbjSJRBZao4gkEoD30s0IjQpsio9FsNpm0p1nuy2+JsF+vYAVqtVar2azRiESiMU3nwPzVdeod7BOIII3GbLZatVrhXYXew2EJcvVtURyPFVZWWq0CgcZisbyfZLPn743dW+wq/jk2NjbPZgxMWCwajUBgtVZWCmMpihZfl2VX3cKjBAobGiolEgH08U1i6+Sd5OTkO8tDCx/4jMH+93BGIqlsaBAGnuARN29c9mRE3qnTsUJhY6NEInk908PgVyU/xUr+Fr7QlcjIn/sI5xrBiT194gZRv5+w9M701TdOlQUeC2pszP48U8Lms6vG4xPi15aQED/eVctP7JnrP5YdFHQssOzE+Wr90ntz8dVXH71Jzct71D/8qgeY/K7xBBqNlrAqGixyaON979h8fv7bT8PPHpWVnQLIdxsObXKuqT4aQ332quR5LYPPvlXSGc+BztDWxMFK6K3Kr01k8GvzS4aplPPVNc5uOLQRg8Kpc61fGImw2zdBO3kyICCAc2ZNHFgmkznjnVXvbrH5rfwZasxRgPbg0BGAInIon7sGB6smOyc45BAy+SRYqCUE/YJlMjk4JIDT2zk50NWZR8nBoK0E5BC2YhA3hvow+35HR0h6Rnp6cHDwBQgse0jB1mArPT0j42xIyP3si9QYbgRAW3Boi3PNg4iUcAq1vLxcp8vIQBKi8LnwWRADDgbpdHCYSgnnRjyocd7p8A16nJJDoVLLL+p0twHCJUThoXHIdue2HUpZCX3txH5C0gzjOIBPDVOHBYIhMTrvtNPau3/GxIgSi953B3P63lKwoNt6YaJJZr1QmJeWHhJcUQ06dPCwiXqU7m1E/yg8rBVFY2NbbAz2fR4fte1lIPtelPehD9/f7315i4oMmn3l8Xgg9fZS6e7dZ3fpurAZEtqntxfOpMfzaravzxYdW1ksXofEFS5qI48SgSbd7l7k0SMs/XoeP35Errup45lVQrekoriIbQf7IAGqSo9J6gpCHfcSIOoEsWuvWJSwbBpLKR8jswX77KdHfZ7JpaUlt5tans19CoDY339OFATHk57l0yNAZEWxYukWg1rlMoGsLntXeuM4N+thkid3PrLOIPfhxOf9SeZ4Zo8u5o8zdheZLFYuVR9I051yUfQOTDmDmU9bozPHp7llJHd6Xtja2tt+SbO9/qt+coaT0GYmiJu/sugr39EyqNmMJXUPjEVd9p8XIyPzG4WdnZ2ZeGh+ZOTww8sXFen7F5yE4jPsJHQwRAqRFQnmDgY1tZSSmA2VbJnL9ER8IjSCbEzE4+nd7Rcs2+++xOMTG9WT859deBo5TJYPt2kYpLqVKPsxG7YUzFxeFJ6yFC52396/f58w+Fh7lyYnMzPkZP0yE6SFOn1l2VB7aWuNEh8LrHBTUZu95+R9uuKkP36AU8/a7gE7Odw7ydhtURQKiLwQaa2//NtLSV8nKmE4e2bhcu9gff39t5M1vAOvQQ/eft1lJwtwnFZaKBlubwZRm03gBwMPMZwzaO/Cr4HV1dU3D5SpHCz0dNmDLusY9zAg+oWEHpNVYzKGUanbwUGy2buGnzzp6em5N4TUkSHkXg/yZBiO0zrFOVBoOmzU1h3cN1Kp0+vg5irSMJWQIRYgCGXgYK45DoMN8kKC3bPauuWUX8RwXD+Vupj0Z8CgDnX6uQEyWDJsZKuuV5KmfVXJFaQUwjSGUAbrqTjdGExiheoxmWWBx5qINBd12SgFqx4ohLHbXNE56mCwlMw2VI/aEAmn+EFIDq4fpQgFCxoLvkIJ2lCn6vhT4Yhe8Rdyc1sinPJXJJQC5bK5zl5fyxkuuJyo0885qIPB2jv+dlQ3tGZZmiaS14FSoKzOs42t0Vq2Ns6cVithxpkjyMZWlUoBqS1GWSBSwPvQMU6pH6OhiVpCoz8owzkcXuZELGr8oEJqMkSYhPFAjfXn0oWZWgrpHBhSxxugDhakuaFoRK5o9NmwMM37RIyHUuPc3PLVZjVXV8tz3DgY1BErTstNpQMI127qs7KQ5H0oRSgHKKyKheyGMKjj46eFEnUYpJA0BqMspab9jIKFYiQwoFAGdfiUIGf1VUcpIU0WM54CUkrsJBawarxQwJA6KSmhs2hU1PmXpNa2RUgp3h+jVqCbBQgUMPkkxmpvVav+DUFCmg26SEkglA+WCI1GFAdjPj9hwgmdvkOlcJSS2tQCSkol87zf7/PFKvFRJSWBadE2KRmlhGi0oBJhWMl8nqfJ55NEkSO6llZNrU4DlMnQrssm5LAkCTQSkERW127QgmFOQ9INdbPW0GbWZbPZCIIPnbnNoG1WN8gwilmaDtNti0GPGCy3TR0ade2o4ahY8EVNQ78qmMYtZf7r/34NI8hv3TvhwB0QJwEAAAAASUVORK5CYII="
          id="b"
          width="72"
          height="72"
        />
      </Defs>
    </Svg>
  );
}
